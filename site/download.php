<?php
    // Caminho para o arquivo APK
    $arquivo = 'lixo-eletronico.apk';

    // Verifica se o arquivo existe
    if (file_exists($arquivo)) {
        // Define os headers para forçar o download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($arquivo) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($arquivo));

        // Limpa o buffer de saída
        flush();

        // Lê o arquivo e faz o download
        readfile($arquivo);

        exit;
    } else {
        echo "Arquivo não encontrado!";
    }
?>
