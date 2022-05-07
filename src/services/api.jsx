import md5 from 'md5';
const baseURL = "https://gateway.marvel.com/v1/public/";
const publicKey = 'a9007ac3be164c49363550f88fe65a51';
const privateKey = 'c6831bc608abdc79952160ece080c22f4a70ecc3';
const heros = 'characters';
const hero = 'character';
const time = Number(new Date());
const hash = md5(time+privateKey+publicKey);

export async function getCharacters(){
    return await fetch(`${baseURL}${heros}?ts=${time}&apikey=${publicKey}&hash=${hash}`).then(data=>data.json()).catch(err=>console.log(err))
}

export async function getCharactersParams(offset){
    return await fetch(`${baseURL}${heros}?ts=${time}&apikey=${publicKey}&hash=${hash}`,
{ params:{ offset:offset } }).then(data=>data.json()).catch(err=>console.log(err))
}

export async function getCharacter(URI){
    return await fetch(`${URI}?ts=${time}&apikey=${publicKey}&hash=${hash}`).then(data=>data.json()).catch(err=>console.log(err))
}