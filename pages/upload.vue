<template>
  <div class="container">
    <h1>Unggah Resep Baru</h1>
    <form @submit.prevent="submitRecipe">
      <label for="name">Nama Resep:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="asal">Asal:</label>
      <input type="text" id="asal" v-model="asal" required>

      <label for="imageUrl">URL Gambar:</label>
      <input type="text" id="imageUrl" v-model="imageUrl" required>

      <label for="kategori">Kategori:</label>
      <input type="text" id="kategori" v-model="kategori" required>

      <label for="ingredients">Bahan-bahan (pisahkan dengan koma):</label>
      <input type="text" id="ingredients" v-model="ingredients" required>

      <label for="steps">Langkah-langkah (pisahkan dengan koma):</label>
      <textarea id="steps" v-model="steps" required></textarea>

      <button type="submit">Unggah Resep</button>
    </form>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus';

export default {
  data() {
    return {
      name: '',
      asal: '',
      imageUrl: '',
      kategori: '',
      ingredients: '',
      steps: ''
    };
  },
  methods: {
    async submitRecipe() {
      try {
        const ingredientsArray = this.ingredients.split(',').map(item => item.trim());
        const stepsArray = this.steps.split(',').map(item => item.trim());

        const docRef = await this.$fire.firestore.collection('recipes').add({
          name: this.name,
          asal: this.asal,
          imageUrl: this.imageUrl,
          kategori: this.kategori,
          ingredients: ingredientsArray,
          steps: stepsArray,
          createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp()
        });

        const recipeId = docRef.id;

        await docRef.update({
          recipeId: recipeId
        });

        console.log("Recipe added successfully!");

        EventBus.$emit('recipeAdded', {
          id: recipeId,
          name: this.name,
          asal: this.asal,
          imageUrl: this.imageUrl,
          kategori: this.kategori,
          ingredients: ingredientsArray,
          steps: stepsArray,
          createdAt: new Date()
        });

        this.name = '';
        this.asal = '';
        this.imageUrl = '';
        this.kategori = '';
        this.ingredients = '';
        this.steps = '';

        this.$router.push('/');
      } catch (error) {
        console.error("Error adding recipe: ", error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input, textarea {
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #cc5200;
}
</style>
