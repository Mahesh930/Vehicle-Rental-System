async function insertUser(userData) {
    try {
        const user = await User.create(userData);
        console.log('User inserted:', user);
    } catch (error) {
        console.error('Error inserting user:', error.message);
    }
}

module.exports = insertUser

