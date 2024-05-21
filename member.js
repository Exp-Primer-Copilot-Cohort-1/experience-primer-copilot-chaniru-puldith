function skillsMember() {
    var self = this;
    self.skills = ko.observableArray([]);
    self.addSkill = function () {
        self.skills.push({ name: "", level: 0 });
    };
    self.removeSkill = function (skill) {
        self.skills.remove(skill);
    };
}