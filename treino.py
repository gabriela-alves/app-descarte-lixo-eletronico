import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau

# Caminho para o diretório onde suas imagens estão organizadas em subpastas: celular/, pilha/, teclado/
train_dir = 'imagens/'

# Pré-processamento das imagens
datagen = ImageDataGenerator(rescale=1./255, validation_split=0.2)

train_generator = datagen.flow_from_directory(
    train_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical',
    subset='training'
)

validation_generator = datagen.flow_from_directory(
    train_dir,
    target_size=(128, 128),
    batch_size=32,
    class_mode='categorical',
    subset='validation'
)

# Construção do modelo CNN
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(3, activation='softmax')  # 3 classes: celular, pilha, teclado
])

# Compilação do modelo
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Callbacks
early_stopping = EarlyStopping(
    monitor='val_loss',          # Monitora a perda de validação
    patience=10,                 # Número de épocas com melhoria mínima para parar o treinamento
    restore_best_weights=True    # Restaura os pesos do modelo com a melhor perda de validação
)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',          # Monitora a perda de validação
    factor=0.5,                  # Fator de redução da taxa de aprendizado
    patience=5,                  # Número de épocas com melhoria mínima para reduzir a taxa de aprendizado
    min_lr=1e-6                  # Taxa de aprendizado mínima
)

# Treinamento
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // train_generator.batch_size,
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // validation_generator.batch_size,
    epochs=1000,
    callbacks=[early_stopping, reduce_lr]
)

# Salvando o modelo
model.save('modelo_identificacao.keras')
print("Modelo treinado e salvo como 'modelo_identificacao.keras'")
