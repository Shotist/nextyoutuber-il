import PocketBase from 'pocketbase';

const pb = new PocketBase('https://nextil.pockethost.io/');

async function setup() {
    try {
        console.log('PocketBase setup completed successfully.');
    } catch (error) {
        console.error('Error setting up PocketBase:', error);
    }
}

setup();

export default pb;
