const Animals = {
  dog(){
    console.log("Doggy...");
  },
  cat(){
    console.log("Catty...");
  },
  lion (){
    console.log("Liony...");
  },
  tiger(){
    console.log("tigery...");
  },
  default(){
    console.log("many...")
  }
};

function MakeAnimalSpeak(animal){
  const animals = Animals[animal] || Animals.default;
  animals();
}

MakeAnimalSpeak('dog');
MakeAnimalSpeak('lion');
MakeAnimalSpeak();
