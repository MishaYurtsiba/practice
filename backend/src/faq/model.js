//CRUD - Create Read Update Delete

const faqModel = {
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
        },
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
        return this.data[this.data.length - 1];
    }
}

module.exports = faqModel;