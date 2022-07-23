<!--<template>
  <header>
    <router-link class="logo" to="/">
      <img src="../src/assets/logo_getthingdone.png" alt="get_things_done logo" width="344"
           height="100">
    </router-link>
    <nav>
      <ul class="menu">
        <li>
          <router-link :to="{name: 'open-tasks'}">Open Tasks</router-link>
        </li>
        <li>
          <router-link :to="{name: 'closed-tasks'}">Closed Tasks</router-link>
        </li>
        <li>
          <router-link :to="{name: 'all-tasks'}">All Tasks</router-link>
        </li>
      </ul>
      <button>
        <router-link :to="{name: 'create-task'}">Create Task</router-link>
      </button>
    </nav>
  </header>
  <router-view/>
</template>-->

<template>
  <NavigationComponent/>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Vue Responsive Nav Menu</h4>
        <hr/>
        <h2>
          With Vue <br/>
          Animations
        </h2>
        <hr/>
      </div>
    </section>
  </div>
  <section>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.


      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).


      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.

      Where can I get some?
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
      passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
      true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
      free from repetition, injected humour, or non-characteristic words etc.
    </p>
    <br />
    <br />
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.


      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).


      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.

      Where can I get some?
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
      passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
      true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
      free from repetition, injected humour, or non-characteristic words etc.
    </p>
    <br />
    <br />
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.


      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).


      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.

      Where can I get some?
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
      passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
      true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
      free from repetition, injected humour, or non-characteristic words etc.
    </p>
    <br />
    <br />
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.


      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).


      Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
      written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
      line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
      accompanied by English versions from the 1914 translation by H. Rackham.

      Where can I get some?
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
      passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
      the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first
      true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
      sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
      free from repetition, injected humour, or non-characteristic words etc.
    </p>
  </section>
</template>

<script lang="ts" setup>
import NavigationComponent from "@/components/NavigationComponent.vue";

</script>

<style lang="scss">
@import url("http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,800,700,900");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
