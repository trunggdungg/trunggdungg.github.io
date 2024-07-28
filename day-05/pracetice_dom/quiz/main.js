const questions = [
    {
        id: 1,
        title: "1 + 1 = ?",
        choices: [1, 2, 3, 4],
        answer: "2"
    },
    {
        id: 2,
        title: "Năm nay có phải năm nhuận không?",
        choices: ["Có", "Không", "Không biết", "Để tôi đi hỏi"],
        answer: "Có"
    },
    {
        id: 3,
        title: "Thủ đô của Việt Nam là gì?",
        choices: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
        answer: "Hà Nội"
    },
    {
        id: 4,
        title: "Python là ngôn ngữ lập trình gì?",
        choices: ["Ngôn ngữ lập trình web", "Ngôn ngữ lập trình hệ thống", "Ngôn ngữ lập trình đa năng", "Ngôn ngữ lập trình di động"],
        answer: "Ngôn ngữ lập trình đa năng"
    },
    {
        id: 5,
        title: "HTML viết tắt của cụm từ nào?",
        choices: ["HyperText Markup Language", "HyperText Markdown Language", "HyperTransfer Markup Language", "HyperTransfer Markdown Language"],
        answer: "HyperText Markup Language"
    }
];

let currentQuestionIndex = 0;
let userChoices = Array(questions.length).fill(null);

const renderQuestion = () => {
    const question = questions[currentQuestionIndex];

    // Hiển thị câu hỏi
    const titleEl = document.querySelector("#question p");
    titleEl.innerHTML = `Câu ${currentQuestionIndex + 1}: ${question.title}`;

    // Hiển thị các lựa chọn
    const choiceEl = document.querySelector(".choices");
    let html = '';
    question.choices.forEach((choice, index) => {
        const checked = userChoices[currentQuestionIndex] === String(choice) ? 'checked' : '';
        html += `
            <div class="choice-item form-check">
                <input type="radio" name="choice" id="choice${index}" value="${choice}" class="form-check-input" ${checked}>
                <label for="choice${index}" class="form-check-label">${choice}</label>
            </div>
        `;
    });

    choiceEl.innerHTML = html;

    //  lưu lựa chọn của người dùng
    document.querySelectorAll('input[name="choice"]').forEach(input => {
        input.addEventListener('change', (event) => {
            userChoices[currentQuestionIndex] = event.target.value;
        });
    });
};

// next
document.getElementById("btn-next").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();

        document.getElementById("btn-pre").classList.remove("hide");

        if (currentQuestionIndex === questions.length - 1) {
            document.getElementById("btn-next").classList.add("hide");
            document.getElementById("btn-finish").classList.remove("hide");
        }
    }
});

// pre
document.getElementById("btn-pre").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();

        document.getElementById("btn-next").classList.remove("hide");
        document.getElementById("btn-finish").classList.add("hide");

        if (currentQuestionIndex === 0) {
            document.getElementById("btn-pre").classList.add("hide");
        }
    }
});

// Kiểm tra đáp án và hiển thị số câu đúng
const checkAnswer = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        if (userChoices[index] === question.answer) {
            correctAnswers++;
        }
    });

    return correctAnswers;
};

// Thêm sự kiện cho nút "Kết thúc"
document.getElementById("btn-finish").addEventListener("click", () => {
    const correctAnswers = checkAnswer();
    alert(`Quiz kết thúc! Bạn trả lời đúng ${correctAnswers} trên tổng số ${questions.length} câu.`);
});

renderQuestion();
