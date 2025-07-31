
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

    //Adding an observable for hint
    this.Hint = ko.observable(data.Hint);

    this.toggleAnswer = () => this.showAnswer(!this.showAnswer());
}