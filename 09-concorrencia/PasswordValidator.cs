using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.Threading;

class SenhaValidator
{
    static List<string> senhaLista = new List<string>();
    static readonly object syncLock = new object();

    static void Main()
    {
        for (int i = 0; i < 100; i++)
        {
            senhaLista.Add("Senha123!");
            senhaLista.Add("fraca");
            senhaLista.Add("12345678");
            senhaLista.Add("Boa#Senha99");
        }

        Console.WriteLine($"Número de senhas: {senhaLista.Count}\n");

        Stopwatch tempoSequencial = Stopwatch.StartNew();
        foreach (var senha in senhaLista)
        {
            ValidarSenha(senha);
        }
        tempoSequencial.Stop();
        Console.WriteLine($"Duração (Sequencial): {tempoSequencial.ElapsedMilliseconds}ms");

        Stopwatch tempoConcorrente = Stopwatch.StartNew();
        int totalThreads = 8;
        int senhasPorThread = senhaLista.Count / totalThreads;
        List<Thread> threadLista = new List<Thread>();

        for (int i = 0; i < totalThreads; i++)
        {
            int inicioIntervalo = i * senhasPorThread;
            int fimIntervalo = (i == totalThreads - 1) ? senhaLista.Count : inicioIntervalo + senhasPorThread;
            var thread = new Thread(() => ProcessarSenhas(inicioIntervalo, fimIntervalo));
            threadLista.Add(thread);
            thread.Start();
        }

        foreach (var t in threadLista)
        {
            t.Join();
        }

        tempoConcorrente.Stop();
        Console.WriteLine($"Duração (Concorrente): {tempoConcorrente.ElapsedMilliseconds}ms");
    }

    static void ProcessarSenhas(int inicio, int fim)
    {
        for (int i = inicio; i < fim; i++)
        {
            ValidarSenha(senhaLista[i]);
        }
    }

    static void ValidarSenha(string senha)
    {
        Thread.Sleep(10);

        bool comprimentoValido = senha.Length >= 8;
        bool possuiNumero = Regex.IsMatch(senha, @"\d");
        bool possuiLetra = Regex.IsMatch(senha, @"[a-zA-Z]");

        bool senhaValida = comprimentoValido && possuiNumero && possuiLetra;

        lock (syncLock)
        {
            // Simulação de operação segura de escrita
        }
    }
}
