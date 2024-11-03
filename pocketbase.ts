import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/');

async function setup() {
    try {
        console.log('PocketBase setup completed successfully.');
    } catch (error) {
        console.error('Error setting up PocketBase:', error);
    }
}

setup();

export default pb;
