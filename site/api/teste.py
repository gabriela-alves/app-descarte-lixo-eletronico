import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import sys

# Configurar o TensorFlow para suprimir logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Suprime logs de informações e avisos

# Garantir que a saída padrão use UTF-8
sys.stdout.reconfigure(encoding='utf-8')

# Função para classificar imagem
def classificar_imagem(img_path, model):
    img = image.load_img(img_path, target_size=(128, 128))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)  # Adiciona a dimensão do batch
    
    # Definindo as classes (ordem deve coincidir com o treinamento)
    classes = ['Celular', 'Pilha', 'Teclado']
    
    # Fazendo a predição
    prediction = model.predict(img_array)
    
    # Obtendo a classe predita
    predicted_class_index = np.argmax(prediction, axis=1)[0]
    predicted_class = classes[predicted_class_index]  # Obtem a classe correspondente
    print(f"Esta imagem é provavelmente um: {predicted_class}")  # Apenas a saída desejada
    
# Carregar o modelo salvo
modelo_carregado = tf.keras.models.load_model('modelo_identificacao.keras')

# Caminho para a imagem que deseja testar
img_teste_path = 'teste_pilha.jpg'

# Classificar a imagem de teste
classificar_imagem(img_teste_path, modelo_carregado)
