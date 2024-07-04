<!-- pages/recipe/ayam-betutu.vue -->
<template>
    <div class="recipe-container">
      <header>
        <h1>Ayam Betutu</h1>
      </header>
  
      <main>
        <div class="recipe-content">
          <img src="/assets/ayam betutu.jpeg" alt="Ayam Betutu" class="recipe-image">
          <section>
            <h2>Bahan-bahan</h2>
            <ul>
              <li>1 ekor ayam kampung</li>
              <li>200 gram kelapa parut</li>
              <li>5 butir bawang merah</li>
              <li>3 siung bawang putih</li>
              <li>4 butir kemiri, sangrai</li>
              <li>3 cm kunyit, bakar</li>
              <li>3 cm jahe, bakar</li>
              <li>2 cm lengkuas, bakar</li>
              <li>1 sdm gula merah, sisir halus</li>
              <li>1 sdm garam</li>
              <li>1 sdm merica bubuk</li>
              <li>2 lembar daun jeruk purut</li>
              <li>3 lembar daun salam</li>
              <li>3 batang serai, memarkan</li>
              <li>200 ml air matang</li>
              <li>2 sdm minyak goreng</li>
            </ul>
          </section>
  
          <section>
            <h2>Cara Membuat</h2>
            <ol>
              <li>Bersihkan ayam dan lumuri dengan air jeruk limau.</li>
              <li>Haluskan bawang merah, bawang putih, kemiri, kunyit, jahe, dan lengkuas.</li>
              <li>Tumis bumbu halus, daun jeruk, daun salam, dan serai hingga harum.</li>
              <li>Masukkan ayam dan aduk hingga tercampur rata.</li>
              <li>Tambahkan kelapa parut, gula merah, garam, dan merica bubuk. Aduk rata.</li>
              <li>Tuang air, aduk rata dan masak dengan api kecil hingga bumbu meresap dan ayam matang sempurna.</li>
              <li>Angkat dan sajikan Ayam Betutu selagi hangat.</li>
            </ol>
          </section>
        </div>
      </main>
    </div>
  </template>
  
  <style scoped>
  .recipe-container {
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #fff5e6; /* Light cream background color */
    padding: 20px;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth effect */
    border-radius: 10px;
  }
  
  header {
    background-color: #ff6600;
    padding: 20px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 10px 10px 0 0;
  }
  
  header h1 {
    margin: 0;
    font-size: 2.5em;
  }
  
  .recipe-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .recipe-image {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  h2 {
    color: #cc5200;
    margin-bottom: 10px;
  }
  
  ul, ol {
    margin: 0 0 20px 20px;
    padding: 0;
  }
  
  ul li, ol li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
  
  footer {
    background-color: #ff6600;
    padding: 10px;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    border-radius: 0 0 10px 10px;
  }
  </style>
  