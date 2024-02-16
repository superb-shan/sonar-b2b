
export default function dummmyData(n = 300) {
    // Function to generate a random phone number
    function generatePhoneNumber() {
        const phoneNumber = '9' + Math.floor(Math.random() * 900000000 + 100000000); // Generates a 10-digit number starting with '9'
        return phoneNumber.toString();
    }
    
    // List of sample names and domains
    const names = [
        'Rahul', 'Kishorekumar', 'John', 'Alice', 'Emma', 'Michael', 'Sophia', 'David', 'Olivia', 'James',
        'Sarah', 'Daniel', 'Grace', 'William', 'Ella', 'Matthew', 'Ava', 'Christopher', 'Mia', 'Joseph',
        'Emily', 'Andrew', 'Lily', 'Benjamin', 'Chloe', 'Samuel', 'Sofia', 'Jacob', 'Victoria', 'Lucas'
    ];
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    
    // Generate 300 hardcoded data entries
    const data = [];
    
    for (let i = 0; i < n; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const email = `${name.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
        const phone = generatePhoneNumber();
    
        const entry = [name, email, phone];
    
        data.push(entry);
    }

    localStorage.setItem('data', JSON.stringify({data: data}));

    // Print the generated data
    // return (data);
}

export function get5Data() {

    const names = ['Seymour', 'Mary', 'Fidel', 'Gonzalo', 'Annmarie', 'Abram', 'Stacy', 'Krista', 'Herb', 'Ada', 'Zachary', 'Marion', 'Chet', 'Ladonna' ]

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate a random date within a specified range
    function getRandomDate(startDate, endDate) {
        const startTimestamp = startDate.getTime();
        const endTimestamp = endDate.getTime();
        const randomTimestamp = getRandomInt(startTimestamp, endTimestamp);
        return new Date(randomTimestamp);
    }
    
    // Generate a random PAN number (dummy format)
    function getRandomPAN() {
        const panLength = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let pan = '';
        for (let i = 0; i < panLength; i++) {
        const randomIndex = getRandomInt(0, characters.length - 1);
        pan += characters.charAt(randomIndex);
        }
        return 'AAAAA' + pan + 'Z'; // Example PAN format (you can adjust this)
    }
    
    // Generate random data
    function generateRandomData(count) {
        const data = [];
        const startDate = new Date(1950, 0, 1); // Start date
        const endDate = new Date(2020, 11, 31); // End date
        
        let newNames = [];

        while (newNames.length<=count) {
            newNames.push( names[Math.floor(Math.random() * names.length)] )
            newNames = [...new Set(newNames)];
        }

        for (let i = 1; i <= count; i++) {
        const id = i;
        const name = newNames[i];
        const dob = getRandomDate(startDate, endDate).toLocaleDateString();
        const pan = getRandomPAN();
        const date1 = getRandomDate(endDate, new Date()).toLocaleDateString();
        const dash1 = '-';
        const status1 = Math.random() < 0.5 ? 'Yes' : 'No';
        const status2 = Math.random() < 0.5 ? '-' : 'Activated';
    
        const entry = [id, name, dob, pan, date1, dash1, status1, status2];
        data.push(entry);
        }

        return data;
    }

    return generateRandomData(Math.floor(Math.random()*10%4)+1);
}