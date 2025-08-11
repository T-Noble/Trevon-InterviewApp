/// Interview Questions Functionality
document.addEventListener('DOMContentLoaded', () => {

    // Interview Question 1 
    function intQues_One() {
        $('#stringInput').on('input', function () {
        const reversed = [...this.value].reverse().join('');
        $('#stringOutPut').text(reversed);
    }).trigger('input');
    }

    intQues_One();
});




