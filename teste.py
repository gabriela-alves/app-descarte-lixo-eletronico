import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image

# Função para classificar imagem
def classificar_imagem(img_path, model):
    img = image.load_img(img_path, target_size=(128, 128))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)  # Adiciona a dimensão do batch
    
    # Definindo as classes (ordem deve coincidir com o treinamento)
    classes = ['Celular', 'Pilha', 'Teclado']
    
    # Fazendo a predição
    prediction = model.predict(img_array)
    
    # Exibindo o resultado
    print(f"Esta imagem é provavelmente um: {classes[np.argmax(prediction)]}")

# Carregar o modelo salvo
modelo_carregado = tf.keras.models.load_model('modelo_identificacao.h5')

# Caminho para a imagem que deseja testar
img_teste_path = 'teste_celular.jpg'

# Classificar a imagem de teste
classificar_imagem(img_teste_path, modelo_carregado)
