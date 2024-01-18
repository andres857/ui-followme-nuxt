import { inputFile } from './newUbication.vue';

export const onSubmit = async () => {


console.log('onsubmit');

try {
if (!inputFile.value) return;

const formData = new FormData();
const file = inputFile.value;

formData.append('file', file);

const options = {
method: 'POST',
body: formData,
headers: {
'Content-Type': 'multipart/form-data'
}
};

console.log(file);

await $fetch('http://localhost:3026/ubications/new/upload', options);
} catch (error: any) {
console.log(console.error);

}
};
