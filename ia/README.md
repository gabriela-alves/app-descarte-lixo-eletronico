# app-descarte-lixo-eletronico

Aplicativo para auxiliar no descarte consciente do lixo eletrônico por linhas.

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Python](https://www.python.org/) (3.12 recomendado)
- [pip](https://pip.pypa.io/en/stable/) (gerenciador de pacotes Python)

## Preparar o Ambiente

Siga as etapas abaixo para configurar o ambiente de desenvolvimento para este projeto.

### 1. Configurar um Ambiente Virtual

Crie o ambiente virtual para gerenciar as dependências do projeto.

```bash
python -m venv venv
```

Ative o ambiente virtual:

No Windows:

```bash
.\venv\Scripts\activate
```
Caso o Windows bloqueie a ativação, desative o bloqueio de execução de scripts no PowerShell:

```bash
Set-ExecutionPolicy RemoteSigned
```

No macOS/Linux:

```bash
source venv/bin/activate
```

### 2. Instalar Dependências

Instale as dependências do projeto.

```bash
pip install tensorflow
pip install keras
pip install Pillow
```

### 3. Pré-processar Imagens

Certifique-se de que as imagens estejam organizadas no diretório `imagens/` conforme necessário. O diretório deve conter subpastas para cada classe, por exemplo, `celular/`, `pilha/`, `teclado/`.

### 4. Treinar o Modelo

Execute o script para treinar o modelo. Certifique-se de que o TensorFlow esteja instalado e configurado corretamente.

```bash
python treino.py
```