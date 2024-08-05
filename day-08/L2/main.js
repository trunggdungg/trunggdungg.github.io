const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 4,
        question: "4 + 4 = ?",
        answers: [3, 4, 5, 8],
    },
];


let quizEl = document.querySelector(".quiz-container");
console.log(quizEl)


const renderQuiz = (quizes) => {
    if (quizes.length === 0) {
        quizEl.innerHTML = "<span>Không có câu hỏi nào trong danh sách!</span>";
        return;
    }

    let html = "";
    quizes.forEach(quiz => {
        html += `
            <div class="quiz-item">
                <h3>Câu ${quiz.id} : ${quiz.question}</h3>
                <div class="quiz-answer">
                    ${quiz.answers.map(answer => `
                        <div class="quiz-answer-item">
                            <input type="radio" name="${quiz.id}" id="${quiz.id}-${answer}" value="${answer}">
                            <label for="${quiz.id}-${answer}">${answer}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    quizEl.innerHTML = html;
};

const selectRandomAnswer = () => {
    const radios = document.querySelectorAll('.quiz-answer input[type="radio"]');
    
    radios.forEach(radio => {
        // Tạo nhóm các radio button cùng tên 
        const group = Array.from(radios).filter(r => r.name === radio.name);
        // Chọn một chỉ số ngẫu nhiên
        const randomIndex = Math.floor(Math.random() * group.length);
        // Đánh dấu radio button ngẫu nhiên 
        group[randomIndex].checked = true;
    });
};


document.getElementById('btn').addEventListener('click', () => {
    selectRandomAnswer(); 
});

renderQuiz(quizes);