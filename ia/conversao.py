import tensorflow as tf

model = tf.keras.models.load_model('modelo_identificacao.keras')
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

with open('modelo_movel.tflite', 'wb') as f:
    f.write(tflite_model)