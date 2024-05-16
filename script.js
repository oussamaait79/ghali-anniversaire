const questions = [
    { photo: 'ghali (1).jpeg', question: 'شنو هي الكلمة اللي تقدري توصفي بها غالي انطلاقاً من هاد الصورة ؟', correctAnswer: 'مشرمل' },
    { photo: 'ghali (2).jpeg', question: 'شنو هي الاكلة المفضلة ديال الشاف غليلو ؟', correctAnswer: 'بيتزا و باسطا' },
    { photo: 'ghali (3).jpeg', question: 'باش فكرك غالي في هاد التصويرة ؟', correctAnswer: 'ابراهيم ولد الزوهرة' },
    { photo: 'ghali (4).jpeg', question: 'شنو هي الجنسية ديال الدرية ديال غالي ؟', correctAnswer: 'هندية' },
    { photo: 'ghali (5).jpeg', question: 'شنو كان كيدير غالي في هاد التصويرة ؟', correctAnswer: 'الله و اعلم مالك قليلة نية' },
    { photo: 'ghali (6).jpeg', question: 'اكثر حاجة كيضارب على قبلها غالي و اشبو ؟', correctAnswer: 'كلشي' },
    { photo: 'ghali (7).jpeg', question: 'على من تقيا غالي في هاد اليوم المشمس الجميل ؟', correctAnswer: 'اوفافا' },
    { photo: 'ghali (8).jpeg', question: 'شحال طالبة في الصداق ديال هاد الزين ؟', correctAnswer: 'سمحي ليا ولكن بزاف الزين كلو داتو بنتي' },
    { photo: 'ghali (9).jpeg', question: 'في من كان كيشوف السي غالي ف هاد اللحظة ؟', correctAnswer: 'فالدرية ديالو ' },
    { photo: 'ghali (10).jpeg', question: 'شنو هي الخدمة المستقبلية ديال السي غالي ؟', correctAnswer: 'شي مهندس ولا طبيب ان شاء الله' }
];

let currentQuestion = 0;

function startQuiz() {
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const question = questions[index];
    document.querySelector('.container').innerHTML = `
        <p>${question.question} </br> </br>
        <input type="text" id="answer" placeholder="اكتب جوابك هنا">
        <button onclick="submitAnswer()">التالي</button> </br> </br>
        <img class="quizz" src="${question.photo}" alt="Photo">
        </p>
    `;
}

function submitAnswer() {
    const answer = document.getElementById('answer').value;
    questions[currentQuestion].answer = answer;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showFinalPage();
    }
}

function showFinalPage() {
    const container = document.querySelector('.container');
    container.innerHTML = '<h1>نتيجة الاختبار</h1>';

    let correctCount = 0;

    questions.forEach((q, index) => {
        const isCorrect = q.answer.toLowerCase() === q.correctAnswer.toLowerCase();
        if (isCorrect) correctCount++;

        container.innerHTML += `
            <p><strong>السؤال  ${index + 1}:</strong> ${q.question}</p>
            <p><strong>جوابك :</strong> ${q.answer} ${isCorrect ? '✔️' : '❌'}</p>
            <p><strong>الجواب الصحيح :</strong> ${q.correctAnswer}</p>
        `;
    });

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    if (correctCount < 5) {
        resultDiv.classList.add('red');
        resultDiv.textContent = `تحصلت على ${correctCount} من ${questions.length}`;
    } else if (correctCount <= 8) {
        resultDiv.classList.add('orange');
        resultDiv.textContent = `تحصلت على ${correctCount} من ${questions.length}`;
    } else {
        resultDiv.classList.add('green');
        resultDiv.textContent = `تحصلت على ${correctCount} من ${questions.length}`;
    }

    container.appendChild(resultDiv);
}
