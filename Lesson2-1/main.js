const person = {
    name:['Sakai','Tomoyuki'],
    age:'26',
    gender:'male',
    interests: {
        music: 'hip-hop',
        sports: 'table tennis'
    },
    getFullName: function(){
        console.log(this.name[0] + this.name[1])
    }
};

console.log(person.name[0]);

const ageKey = 'age';
console.log(person[ageKey]); 

console.log(person.interests.music);

console.log(person.getFullName());