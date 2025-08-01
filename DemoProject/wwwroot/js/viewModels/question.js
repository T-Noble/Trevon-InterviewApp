
$(function () {
    ko.applyBindings(new InterviewViewModel())
})

function InterviewViewModel() {
    let self = this;
    self.questions = ko.observableArray([]);

    $.ajax({
        type: "GET",
        url: "/Home/GetQuestions"
    })
        .then(function (result) {
            self.questions($.map(result, function (val) {
                return new QuestionModel(val);
            }))
        })
}

function QuestionModel(data) {
    // THERE IS A BUG IN THIS FUNCTION
    this.Text = ko.observable(data.QuestionText);
    this.Answer = ko.observable(data.Answer);
    this.showAnswer = ko.observable(false);
    this.btnColor = ko.observable("white");
    this.buttonText = ko.observable("Show Answer");

    //Adding an observable for hint
    this.Hint = ko.observable(data.Hint);

    //Use this function to show the data on button click
    //Extend function to change answer of the button
    this.toggleAnswer = () => {
        var changeText = !this.showAnswer();
        this.showAnswer(changeText);
        this.buttonText(changeText ? "Hide Answer" : "Show Answer");
        //this.buttonText(change ? "Hide Answer" : "Show Answer");
    };

    this.ColorTheButton = () => this.btnColor("gray");

    //Original
    //this.toggleAnswer = () => this.showAnswer(!this.showAnswer());
}