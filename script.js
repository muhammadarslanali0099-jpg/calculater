let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {

        const value = e.target.innerHTML;

        if (value === 'AC') {
            string = "";
        } 
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
        } 
        else if (value === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
        } 
        else {
            string += value;
        }

        input.value = string;
    });
});
