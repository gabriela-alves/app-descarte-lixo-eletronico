<?php
header('Content-Type: text/html; charset=utf-8');

// Executa o script Python
$output = shell_exec('venv\\Scripts\\python.exe teste.py 2>&1');

// Remove qualquer espaço em branco desnecessário
$output = trim($output);

// Divide a saída em palavras
$words = explode(' ', $output);

// Captura a última palavra
$lastWord = end($words);

// Exibe a última palavra
echo htmlspecialchars($lastWord);  // Usa htmlspecialchars para evitar problemas com HTML
?>
