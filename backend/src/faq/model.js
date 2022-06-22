//CRUD - Create Read Update Delete

const faqModel = {
    keys: ["question", "answer", "createdAt", "count"],
    data: [
        {
            id: 1,
            question: "Скільки балів потрібно для отримання заліку автоматом?",
            answer: "60 балів",
            cratedAt: new Date(2021, 10, 3),
            count: 0
        },
        {
            id: 2,
            question: "Яка спеціальність є найкраща?",
            answer: "124 - системний аналіз",
            cratedAt: new Date(2022, 6, 21),
            count: 3
        }
    ],
    count: 2,

    read: function () {
        return this.data;
    },
    create: function (faq) {
        this.count++;
        faq.id = this.count;
        faq.cratedAt = new Date(Date.now());
        faq.count = 0;
        this.data.push(faq);
        return faq;
    },
    update: function (faq, id) { //faq = { question: "Найкраща спеціальність?",} id = 5
        let element = this.data.find(f => f.id == id);
        if (!element)
            return null;
        // if (faq.question)
        //     element.question = faq.question;
        // element.answer = faq.answer;
        // ...
        for (let key of this.keys)
            if (faq[key])
                element[key] = faq[key];
        return element;
    },
    delete: function (id) {
        const index = this.data.findIndex(f => f.id == id);
        if (index == -1)
            return null;
        const deletedElement = this.data.splice(index, 1);
        return deletedElement;
    }
}

module.exports = faqModel;