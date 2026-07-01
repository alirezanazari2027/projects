export function getDataForm(prevState, formData) {
    // for (let i = 0; i < 999999999; i++) {}
    const name = formData.get("name");
    const email = formData.get("email");
    if (name.length >= 3 && email.includes("@")) {
        console.log(name, email);
        return {
            data: `My name is: ${name} and My email address is: ${email}`,
            state: true,
        };
    } else {
        return {
            data: 'invalid Data',
            state: true,
        }
    }
}