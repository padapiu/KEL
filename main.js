 let isTakingExam = false; 
        // ------------------ LOGIC ĐÓNG/MỞ MODAL CHỌN CHẾ ĐỘ ------------------
        let selectedTestForModal = "";

// Hàm đóng Modal Chọn Chế Độ
        window.closeModeModal = function() {
            const modal = document.getElementById('mode-selection-modal');
            const content = document.getElementById('mode-modal-content');
            
            if (modal && content) {
                // 1. Tạo hiệu ứng mờ dần và thu nhỏ (ngược lại với lúc mở)
                modal.classList.add('opacity-0');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
                
                // 2. Chờ hiệu ứng CSS chạy xong (300ms) rồi mới thêm class 'hidden' để ẩn hoàn toàn
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        };

        // ------------------ DỮ LIỆU ĐỀ THI THPT ------------------
        const clozePassage2 = `The rise of digital technology has profoundly impacted education. In recent years, traditional classrooms have been supplemented by online learning platforms, (25) ______ provide students with greater flexibility. Online courses allow learners to access materials at their own pace, making education more accessible to those with busy schedules. (26) ______, this shift also presents challenges. Some students struggle with time management and lack the discipline needed for self-study. Moreover, the absence of face-to-face interaction can lead to feelings of isolation. To address these issues, many educators are adopting a blended learning approach. This method combines online resources (27) ______ traditional classroom instruction. By blending the two, schools can offer the benefits of digital tools while maintaining the personal connection that is (28) ______ for effective learning. Ultimately, (29) ______ technology continues to evolve, education systems must adapt to ensure that all students can succeed.`;
        const readingPassage1_2 = `Sleep is a vital process that affects our physical and mental health. Despite its importance, many adults do not get the recommended seven to eight hours of sleep per night. The consequences of sleep deprivation are numerous, ranging from decreased concentration and memory issues to a weakened immune system.\n\nOne of the main culprits behind modern sleep problems is the excessive use of electronic devices before bedtime. The blue light emitted by smartphones and tablets interferes with the production of melatonin, a hormone that regulates the sleep-wake cycle. Consequently, people find it harder to fall asleep and experience poorer sleep quality.\n\nTo improve sleep hygiene, experts suggest establishing a regular bedtime routine. This includes going to bed and waking up at the same time every day, even on weekends. Additionally, creating a relaxing pre-sleep ritual, such as reading a book or taking a warm bath, can signal to the body that it is time to wind down. Keeping the bedroom dark, quiet, and cool also promotes better rest. By prioritizing sleep, individuals can significantly enhance their overall well-being and daily performance.`;
        const readingPassage2_2 = `Renewable energy sources, such as wind, solar, and hydroelectric power, are playing an increasingly crucial role in the global fight against climate change. Unlike fossil fuels, which release harmful greenhouse gases when burned, renewable energy generates electricity with little to no emissions. This transition is essential for reducing the world's carbon footprint and mitigating the severe impacts of global warming.\n\nSolar energy has seen remarkable growth over the past decade. The cost of solar panels has plummeted, making it more accessible for both residential and commercial use. Innovations in battery storage technology have also addressed one of solar power's main drawbacks: intermittency. Now, excess energy generated during sunny days can be stored and used at night or during cloudy weather, ensuring a more stable power supply.\n\nWind power is another rapidly expanding sector. Offshore wind farms, in particular, have enormous potential because ocean winds are generally stronger and more consistent than those on land. Countries with long coastlines are investing heavily in this infrastructure to capitalize on the abundant resource. However, the construction of these massive turbines requires significant initial investment and careful environmental planning to avoid disrupting marine ecosystems.\n\nDespite the progress, the shift to 100% renewable energy faces hurdles. Upgrading the existing electrical grid to handle decentralized power sources is a massive logistical and financial challenge. Moreover, political and economic interests tied to the fossil fuel industry often slow down the transition. Nevertheless, the continuous advancement of green technologies provides hope for a sustainable and clean energy future.`;

        const thptExamData2 = [
            { id: 1, group: "Phần Ngữ âm", q: "Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\nA. maintain | B. attain | C. certain | D. complain", opts: ["A. maintain", "B. attain", "C. certain", "D. complain"], ans: 2, exp: "certain /sɜːtən/, các từ còn lại chứa âm /eɪ/" },
            { id: 2, group: "Phần Ngữ âm", q: "A. looked | B. smiled | C. stayed | D. listened", opts: ["A. looked", "B. smiled", "C. stayed", "D. listened"], ans: 0, exp: "looked phát âm là /t/, các từ còn lại là /d/" },
            { id: 3, group: "Phần Trọng âm", q: "Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.\nA. confide | B. gather | C. divide | D. maintain", opts: ["A. confide", "B. gather", "C. divide", "D. maintain"], ans: 1, exp: "gather nhấn âm 1, các từ còn lại nhấn âm 2" },
            { id: 4, group: "Phần Trọng âm", q: "A. environment | B. technology | C. agriculture | D. discovery", opts: ["A. environment", "B. technology", "C. agriculture", "D. discovery"], ans: 2, exp: "agriculture nhấn âm 1, các từ còn lại nhấn âm 2" },
            { id: 5, group: "Phần Từ vựng & Ngữ pháp", q: "The new policy will be implemented ______ the beginning of next month.", opts: ["A. in", "B. on", "C. at", "D. by"], ans: 2, exp: "at the beginning of: vào đầu của" },
            { id: 6, group: "Phần Từ vựng & Ngữ pháp", q: "If she ______ about the heavy traffic, she would have left earlier.", opts: ["A. knows", "B. knew", "C. had known", "D. has known"], ans: 2, exp: "Câu điều kiện loại 3: If + S + had P2, S + would have P2" },
            { id: 7, group: "Phần Từ vựng & Ngữ pháp", q: "Despite the bad weather, the outdoor concert ______ as planned.", opts: ["A. went on", "B. put off", "C. took over", "D. brought up"], ans: 0, exp: "went on = continued: tiếp tục diễn ra" },
            { id: 8, group: "Phần Từ vựng & Ngữ pháp", q: "Students are required to hand in their assignments by Friday, ______?", opts: ["A. are they", "B. aren't they", "C. do they", "D. don't they"], ans: 1, exp: "Câu hỏi đuôi cho 'Students are' là 'aren't they'" },
            { id: 9, group: "Phần Từ vựng & Ngữ pháp", q: "The ______ of the internet has completely changed the way we communicate.", opts: ["A. invention", "B. discover", "C. creation", "D. maintenance"], ans: 0, exp: "invention: sự phát minh (phát minh ra internet)" },
            { id: 10, group: "Phần Từ vựng & Ngữ pháp", q: "She is a ______ student who always gets top marks in all subjects.", opts: ["A. hard-working", "B. hard-worked", "C. hardly-working", "D. working-hard"], ans: 0, exp: "hard-working: tính từ ghép (chăm chỉ)" },
            { id: 11, group: "Phần Từ vựng & Ngữ pháp", q: "The book ______ by my favorite author is a bestseller this year.", opts: ["A. writing", "B. written", "C. wrote", "D. writes"], ans: 1, exp: "Rút gọn mệnh đề quan hệ dạng bị động: The book which was written -> written" },
            { id: 12, group: "Phần Từ vựng & Ngữ pháp", q: "He didn't have much time, so he just ______ through the report before the meeting.", opts: ["A. glanced", "B. stared", "C. gazed", "D. watched"], ans: 0, exp: "glance through: nhìn lướt qua" },
            { id: 13, group: "Phần Từ vựng & Ngữ pháp", q: "I remember ______ to the zoo by my parents when I was a child.", opts: ["A. taking", "B. being taken", "C. to take", "D. to be taken"], ans: 1, exp: "remember + V-ing: nhớ đã làm gì; dạng bị động: being + P2" },
            { id: 14, group: "Phần Từ vựng & Ngữ pháp", q: "The higher the demand for the product, ______ it becomes.", opts: ["A. the most expensive", "B. the more expensive", "C. more expensive", "D. as expensive"], ans: 1, exp: "Cấu trúc so sánh kép: The + so sánh hơn, the + so sánh hơn" },
            { id: 15, group: "Phần Từ vựng & Ngữ pháp", q: "They have set up a special fund to support people ______ in rural areas.", opts: ["A. living", "B. to live", "C. lived", "D. live"], ans: 0, exp: "Rút gọn mệnh đề quan hệ dạng chủ động: people who live -> living" },
            { id: 16, group: "Phần Từ vựng & Ngữ pháp", q: "The company is looking for a candidate with strong ______ skills to handle customer complaints.", opts: ["A. interpersonal", "B. international", "C. interchangeable", "D. internal"], ans: 0, exp: "interpersonal skills: kỹ năng giao tiếp, ứng xử" },
            { id: 17, group: "Phần Từ vựng & Ngữ pháp", q: "We ______ out of milk. Could you buy some on your way home?", opts: ["A. have run", "B. are running", "C. ran", "D. run"], ans: 0, exp: "Thì hiện tại hoàn thành diễn tả sự việc vừa mới xảy ra, kết quả lưu lại ở hiện tại" },
            { id: 18, group: "Phần Từ vựng & Ngữ pháp", q: "It is crucial that the manager ______ informed of the changes immediately.", opts: ["A. is", "B. be", "C. was", "D. has been"], ans: 1, exp: "Cấu trúc giả định: It is crucial that + S + (should) + V nguyên thể (be)" },
            { id: 19, group: "Phần Giao tiếp", q: "Tom: 'Would you like to join us for dinner tonight?' - Mary: '______'", opts: ["A. Yes, I'd love to.", "B. No, thanks. I'm full.", "C. I don't think so.", "D. You're welcome."], ans: 0, exp: "Đáp lại lời mời một cách lịch sự" },
            { id: 20, group: "Phần Giao tiếp", q: "Alex: 'I think we should use public transport to reduce pollution.' - Sarah: '______'", opts: ["A. I couldn't agree more.", "B. You're welcome.", "C. Good luck!", "D. That's a bad idea."], ans: 0, exp: "Bày tỏ sự đồng ý hoàn toàn" },
            { id: 21, group: "Phần Đồng nghĩa & Trái nghĩa", q: "CLOSEST in meaning:\nThe teacher's explanation was so lucid that everyone understood the complex topic.", opts: ["A. clear", "B. confusing", "C. boring", "D. long"], ans: 0, exp: "lucid = clear: rõ ràng, dễ hiểu" },
            { id: 22, group: "Phần Đồng nghĩa & Trái nghĩa", q: "CLOSEST in meaning:\nMany species of animals are in peril due to habitat destruction.", opts: ["A. safety", "B. danger", "C. comfort", "D. balance"], ans: 1, exp: "in peril = in danger: gặp nguy hiểm" },
            { id: 23, group: "Phần Đồng nghĩa & Trái nghĩa", q: "OPPOSITE in meaning:\nThe new law was implemented successfully despite initial opposition.", opts: ["A. executed", "B. applied", "C. delayed", "D. managed"], ans: 2, exp: "implemented: được thi hành >< delayed: bị trì hoãn" },
            { id: 24, group: "Phần Đồng nghĩa & Trái nghĩa", q: "OPPOSITE in meaning:\nShe was completely exhausted after running the marathon.", opts: ["A. tired", "B. energetic", "C. weak", "D. sleepy"], ans: 1, exp: "exhausted: kiệt sức >< energetic: tràn đầy năng lượng" },
            { id: 25, passage: clozePassage2, group: "Phần Điền khuyết", q: "Question 25", opts: ["A. who", "B. which", "C. where", "D. that"], ans: 1, exp: "Đại từ quan hệ thay thế cho cụm danh từ chỉ vật phía trước, dùng sau dấu phẩy" },
            { id: 26, passage: clozePassage2, group: "Phần Điền khuyết", q: "Question 26", opts: ["A. Therefore", "B. However", "C. For instance", "D. Furthermore"], ans: 1, exp: "Liên từ chỉ sự tương phản giữa lợi ích ở câu trước và khó khăn ở câu sau" },
            { id: 27, passage: clozePassage2, group: "Phần Điền khuyết", q: "Question 27", opts: ["A. with", "B. to", "C. for", "D. about"], ans: 0, exp: "combine sth with sth: kết hợp cái gì với cái gì" },
            { id: 28, passage: clozePassage2, group: "Phần Điền khuyết", q: "Question 28", opts: ["A. vital", "B. trivial", "C. optional", "D. harmful"], ans: 0, exp: "vital: quan trọng, thiết yếu" },
            { id: 29, passage: clozePassage2, group: "Phần Điền khuyết", q: "Question 29", opts: ["A. although", "B. because", "C. as", "D. until"], ans: 2, exp: "as: khi/bởi vì. Ở đây dịch là 'khi công nghệ tiếp tục phát triển'" },
            { id: 30, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "What is the main idea of the passage?", opts: ["A. The benefits of using electronic devices before bed.", "B. The importance of sleep and how to improve it.", "C. How to cure memory issues with medication.", "D. The physical consequences of working too hard."], ans: 1, exp: "Ý chính của đoạn văn là tầm quan trọng của giấc ngủ và cách cải thiện nó" },
            { id: 31, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "According to paragraph 1, which of the following is NOT a consequence of sleep deprivation?", opts: ["A. Memory issues", "B. Decreased concentration", "C. A weakened immune system", "D. Increased productivity"], ans: 3, exp: "Tăng năng suất làm việc KHÔNG phải là hậu quả của thiếu ngủ" },
            { id: 32, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "The word 'interferes' in paragraph 2 is closest in meaning to ______.", opts: ["A. supports", "B. disrupts", "C. creates", "D. improves"], ans: 1, exp: "interfere = disrupt: cản trở, làm gián đoạn" },
            { id: 33, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "What does the blue light from screens do to the body?", opts: ["A. It increases melatonin production.", "B. It helps people fall asleep faster.", "C. It disrupts the production of melatonin.", "D. It improves overall sleep quality."], ans: 2, exp: "Ánh sáng xanh làm gián đoạn quá trình sản xuất melatonin" },
            { id: 34, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "According to the passage, maintaining a regular bedtime schedule ______.", opts: ["A. should only be done on weekdays", "B. is a key part of improving sleep hygiene", "C. is less effective than using electronic devices", "D. causes more stress and anxiety"], ans: 1, exp: "Duy trì lịch ngủ đều đặn là một phần quan trọng để cải thiện giấc ngủ" },
            { id: 35, passage: readingPassage1_2, group: "Phần Đọc hiểu 1", q: "The word 'it' in paragraph 3 refers to ______.", opts: ["A. the body", "B. a book", "C. the pre-sleep ritual", "D. going to bed"], ans: 0, exp: "Đại từ 'it' thay thế cho 'the body' (cơ thể)" },
            { id: 36, passage: readingPassage2_2, group: "Phần Đọc hiểu 2", q: "What is the primary focus of the passage?", opts: ["A. The history of fossil fuels.", "B. The advantages and challenges of renewable energy.", "C. How to build offshore wind farms.", "D. The cost of upgrading the electrical grid."], ans: 1, exp: "Đoạn văn tập trung vào lợi ích và thách thức của năng lượng tái tạo" },
            { id: 37, passage: readingPassage2_2, group: "Phần Đọc hiểu 2", q: "Why is renewable energy considered better for the environment than fossil fuels?", opts: ["A. It produces more greenhouse gases.", "B. It is more expensive to produce.", "C. It generates electricity with minimal emissions.", "D. It requires burning natural resources."], ans: 2, exp: "Nó tạo ra điện với lượng khí thải tối thiểu" },
            { id: 38, passage: readingPassage2_2, group: "Phần Đọc hiểu 2", q: "The word 'plummeted' in paragraph 2 means ______.", opts: ["A. increased sharply", "B. remained stable", "C. decreased significantly", "D. fluctuated randomly"], ans: 2, exp: "plummeted = giảm mạnh (decreased significantly)" },
            { id: 39, passage: readingPassage2_2, group: "Phần Đọc hiểu 2", q: "How has battery storage technology improved solar energy?", opts: ["A. By making solar panels larger.", "B. By allowing excess energy to be saved for later use.", "C. By generating more sunlight.", "D. By reducing the cost of installation."], ans: 1, exp: "Công nghệ pin lưu trữ giúp lưu lại năng lượng dư thừa để dùng sau" },
            { id: 40, passage: readingPassage2_2, group: "Phần Đọc hiểu 2", q: "According to paragraph 3, offshore wind farms are advantageous because ______.", opts: ["A. they are cheap to build", "B. they do not require any planning", "C. ocean winds are stronger and more consistent", "D. they are located far away from the coast"], ans: 2, exp: "Gió ngoài khơi mạnh và ổn định hơn so với trên đất liền" }
        ];

        const clozePassage3 = `Preparing for standardized language proficiency tests can be a daunting task for many high school students. A well-structured study plan is essential for achieving a high band score. Firstly, students should familiarize themselves with the test format, (25) ______ includes different sections such as reading, writing, listening, and speaking. Secondly, consistent practice is vital. Engaging with a variety of materials, from academic articles to podcasts, helps expand one's vocabulary and comprehension skills. (26) ______, relying solely on self-study might not be enough for everyone. Many learners find it beneficial to join study groups or enroll in specialized preparation courses. In these environments, they can receive constructive feedback from experienced instructors and (27) ______ their speaking skills through mock interviews. Furthermore, managing time effectively during the actual exam is a skill that requires (28) ______ practice. By taking full-length practice tests under timed conditions, candidates can train themselves to stay calm and focused. Ultimately, with dedication and the right strategies, conquering these exams becomes an (29) ______ goal.`;
        const readingPassage1_3 = `The landscape of digital entertainment has undergone a massive transformation over the last two decades. Gone are the days when video games were solely considered a niche hobby for children. Today, the gaming industry, driven by major platforms and sophisticated hardware consoles, surpasses both the film and music industries in global revenue.\n\nOne of the key drivers of this growth is the shift towards digital distribution. Platforms that allow users to purchase, download, and manage their game libraries online have revolutionized how consumers access content. This convenience eliminates the need for physical discs and allows developers to frequently update their games with new features or downloadable content (DLC), keeping the community engaged for years after a game's initial release.\n\nFurthermore, gaming has become a highly social activity. Multiplayer titles and co-op campaigns enable friends to connect and collaborate regardless of geographical boundaries. Esports—competitive, organized video gaming—has also surged in popularity, drawing massive audiences to live streams and filling stadiums with passionate fans cheering for their favorite professional teams. As technology continues to advance with virtual reality and cloud gaming, the future of digital entertainment promises to be even more immersive.`;
        const readingPassage2_3 = `Choosing a university is one of the most critical decisions a young adult will make. The transition from high school to higher education involves navigating a maze of options, ranging from large public universities to specialized academies focusing on law, economics, or diplomacy. Each institution offers a unique environment, and finding the right fit requires careful self-reflection and research.\n\nFor many students, academic reputation and program quality are the primary considerations. A university known for its rigorous curriculum and distinguished faculty can provide a solid foundation for a future career. However, focusing solely on rankings can be misleading. It is equally important to consider the teaching style, class sizes, and the availability of hands-on learning opportunities such as internships and research projects.\n\nBeyond academics, campus culture plays a vital role in student satisfaction. Some students thrive in bustling, competitive environments, while others prefer tight-knit communities where they can easily build relationships with professors and peers. Extracurricular activities, clubs, and sports facilities also contribute significantly to the overall university experience, fostering personal growth and leadership skills.\n\nFinancial considerations cannot be overlooked either. Tuition fees, living expenses, and the availability of scholarships or financial aid often dictate the final choice for many families. Ultimately, the best university is not necessarily the most prestigious one, but rather the one that aligns with the student's academic goals, personality, and financial circumstances.`;

        const thptExamData3 = [
            { id: 1, group: "Part I. Phonetics", q: "Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\nA. apply | B. rely | C. deny | D. safely", opts: ["A. apply", "B. rely", "C. deny", "D. safely"], ans: 3, exp: "safely /ˈseɪfli/ (âm /i/). Chữ y cuối từ trạng từ thường phát âm /i/, các từ còn lại /aɪ/." },
            { id: 2, group: "Part I. Phonetics", q: "A. matches | B. boxes | C. clothes | D. classes", opts: ["A. matches", "B. boxes", "C. clothes", "D. classes"], ans: 2, exp: "clothes /kləʊðz/ (âm /z/). Các từ còn lại đuôi -es phát âm là /ɪz/." },
            { id: 3, group: "Part I. Phonetics", q: "Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.\nA. academy | B. economics | C. biology | D. geography", opts: ["A. academy", "B. economics", "C. biology", "D. geography"], ans: 1, exp: "economics /ˌiːkəˈnɒmɪks/ (nhấn âm 3). Các từ còn lại nhấn âm 2." },
            { id: 4, group: "Part I. Phonetics", q: "A. console | B. gamer | C. platform | D. software", opts: ["A. console", "B. gamer", "C. platform", "D. software"], ans: 0, exp: "console /kənˈsəʊl/ (động từ nhấn âm 2). Đề thi thường lấy từ console (động từ) để bẫy. Các từ còn lại nhấn âm 1." },
            { id: 5, group: "Part II. Vocabulary and Grammar", q: "After meticulously preparing his academic transcript, he submitted his application to the National Economics University ______ Friday morning.", opts: ["A. in", "B. on", "C. at", "D. for"], ans: 1, exp: "Giới từ 'on' được dùng trước một buổi của một ngày cụ thể (on Friday morning)." },
            { id: 6, group: "Part II. Vocabulary and Grammar", q: "The recent football match between Portugal and Spain was so ______ that fans couldn't take their eyes off the screen.", opts: ["A. captivate", "B. captivating", "C. captivated", "D. captivates"], ans: 1, exp: "Cần tính từ miêu tả tính chất trận đấu. 'Captivating' (hấp dẫn) là tính từ chủ động phù hợp." },
            { id: 7, group: "Part II. Vocabulary and Grammar", q: "If he ______ more time practicing his speaking skills, he would have achieved a higher band score on the test.", opts: ["A. spends", "B. spent", "C. had spent", "D. has spent"], ans: 2, exp: "Câu điều kiện loại 3 diễn tả sự việc trái với quá khứ: If + S + had + P2, S + would have + P2." },
            { id: 8, group: "Part II. Vocabulary and Grammar", q: "Many students prefer using digital platforms like Steam for gaming because they offer a wide ______ of titles.", opts: ["A. variety", "B. group", "C. amount", "D. number"], ans: 0, exp: "Cụm cố định: 'a wide variety of + N(số nhiều)' nghĩa là rất nhiều loại, sự đa dạng." },
            { id: 9, group: "Part II. Vocabulary and Grammar", q: "The Diplomatic Academy of Vietnam is highly ______ for its rigorous academic standards and excellent faculty.", opts: ["A. respected", "B. ignored", "C. neglected", "D. criticized"], ans: 0, exp: "highly respected (rất được tôn trọng). Các phương án còn lại mang nghĩa tiêu cực không hợp ngữ cảnh." },
            { id: 10, group: "Part II. Vocabulary and Grammar", q: "By the time the new gaming console ______ next year, developers will have created dozens of exclusive games for it.", opts: ["A. releases", "B. will release", "C. released", "D. had released"], ans: 0, exp: "Cấu trúc: By the time + S + V(hiện tại đơn), S + V(tương lai hoàn thành)." },
            { id: 11, group: "Part II. Vocabulary and Grammar", q: "The teacher suggested that the students ______ past exam papers to familiarize themselves with the test format.", opts: ["A. to review", "B. reviewing", "C. review", "D. reviews"], ans: 2, exp: "Cấu trúc giả định: suggest that + S + (should) + V(nguyên thể không chia)." },
            { id: 12, group: "Part II. Vocabulary and Grammar", q: "We need to ______ the pros and cons of studying locally versus going abroad.", opts: ["A. take off", "B. weigh up", "C. look into", "D. bring up"], ans: 1, exp: "Phrasal verb 'weigh up' nghĩa là cân nhắc, đánh giá (ưu và nhược điểm)." },
            { id: 13, group: "Part II. Vocabulary and Grammar", q: "The committee has decided to grant scholarships to students ______ excel in both academics and extracurricular activities.", opts: ["A. who", "B. which", "C. whom", "D. whose"], ans: 0, exp: "Đại từ quan hệ thay thế cho danh từ chỉ người 'students' và làm chủ ngữ cho động từ 'excel'." },
            { id: 14, group: "Part II. Vocabulary and Grammar", q: "Hardly ______ the exam room when the bell rang to signal the end of the test.", opts: ["A. the students had left", "B. had the students left", "C. the students left", "D. did the students leave"], ans: 1, exp: "Đảo ngữ: Hardly + had + S + P2 + when + S + V(quá khứ đơn) (Vừa mới... thì...)." },
            { id: 15, group: "Part II. Vocabulary and Grammar", q: "Reading manga and comic books is a great way to relax; ______, it can also help improve visual literacy and vocabulary.", opts: ["A. however", "B. otherwise", "C. therefore", "D. moreover"], ans: 3, exp: "Vế 2 bổ sung thêm lợi ích (có từ also). Cần liên từ chỉ sự bổ sung 'Moreover' (Hơn nữa)." },
            { id: 16, group: "Part II. Vocabulary and Grammar", q: "She was ______ tired after the three-hour examination that she went straight to bed.", opts: ["A. so", "B. such", "C. too", "D. enough"], ans: 0, exp: "Cấu trúc: S + be + so + adj + that + clause (Quá... đến nỗi mà)." },
            { id: 17, group: "Part II. Vocabulary and Grammar", q: "The local authorities are planning to ______ a new public library in the city center to promote reading habits.", opts: ["A. build up", "B. set up", "C. turn down", "D. make up"], ans: 1, exp: "Set up (thành lập, xây dựng). Build up (tích lũy); Turn down (từ chối)." },
            { id: 18, group: "Part II. Vocabulary and Grammar", q: "It is essential that every candidate ______ their identification documents before entering the examination hall.", opts: ["A. present", "B. presents", "C. presenting", "D. to present"], ans: 0, exp: "Cấu trúc giả định: It is essential/important + that + S + (should) + V(nguyên thể)." },
            { id: 19, group: "Part III. Communication", q: "Jane: 'I think participating in university clubs is a waste of time.' - Mark: '______. It helps you build a strong professional network.'", opts: ["A. I completely agree", "B. I couldn't agree more", "C. I don't quite agree with you", "D. You're right"], ans: 2, exp: "Mark nêu lợi ích tốt của CLB, tức là đang phản đối Jane. Chọn C (Tôi không hoàn toàn đồng ý)." },
            { id: 20, group: "Part III. Communication", q: "David: 'Would you like me to help you double-check your admission essay?' - Sarah: '______'", opts: ["A. Yes, please. That would be great!", "B. No, I don't care.", "C. You're welcome.", "D. It's my pleasure."], ans: 0, exp: "Sarah đồng ý nhận sự giúp đỡ nên đáp lại lịch sự bằng A." },
            { id: 21, group: "Part IV. Synonyms and Antonyms", q: "CLOSEST in meaning:\nThe university's admission process is highly competitive, with thousands of applicants vying for a few hundred spots.", opts: ["A. effortless", "B. demanding", "C. relaxed", "D. peaceful"], ans: 1, exp: "Competitive (cạnh tranh cao) đồng nghĩa với demanding (khắt khe, đòi hỏi cao)." },
            { id: 22, group: "Part IV. Synonyms and Antonyms", q: "CLOSEST in meaning:\nThe new software update will enhance the performance of older computer models.", opts: ["A. improve", "B. worsen", "C. maintain", "D. decline"], ans: 0, exp: "Enhance (nâng cao, cải thiện) = improve." },
            { id: 23, group: "Part IV. Synonyms and Antonyms", q: "OPPOSITE in meaning:\nDespite the heavy rain, the football match commenced punctually at 7 PM.", opts: ["A. exactly", "B. lately", "C. promptly", "D. on time"], ans: 1, exp: "Punctually (đúng giờ). Trái nghĩa nhất trong các đáp án là lately (dù lately thường nghĩa là gần đây, nhưng A, C, D đều đồng nghĩa)." },
            { id: 24, group: "Part IV. Synonyms and Antonyms", q: "OPPOSITE in meaning:\nThe government's decision to cut funding for public schools was met with fierce opposition from parents.", opts: ["A. strong", "B. gentle", "C. intense", "D. severe"], ans: 1, exp: "Fierce (dữ dội, mãnh liệt) >< gentle (nhẹ nhàng, ôn hòa)." },
            { id: 25, passage: clozePassage3, group: "Part V. Guided Cloze Test", q: "Question 25", opts: ["A. who", "B. whose", "C. which", "D. that"], ans: 2, exp: "Thay thế cho 'test format' (vật), dùng sau dấu phẩy (mệnh đề không xác định)." },
            { id: 26, passage: clozePassage3, group: "Part V. Guided Cloze Test", q: "Question 26", opts: ["A. However", "B. Therefore", "C. Moreover", "D. Consequently"], ans: 0, exp: "Vế trước nói tự học, vế sau nói tự học không đủ, cần đi học thêm -> Tương phản (However)." },
            { id: 27, passage: clozePassage3, group: "Part V. Guided Cloze Test", q: "Question 27", opts: ["A. decrease", "B. refine", "C. ignore", "D. damage"], ans: 1, exp: "refine their speaking skills (trau chuốt, cải thiện kỹ năng)." },
            { id: 28, passage: clozePassage3, group: "Part V. Guided Cloze Test", q: "Question 28", opts: ["A. a few", "B. little", "C. many", "D. much"], ans: 3, exp: "practice là danh từ không đếm được -> dùng much." },
            { id: 29, passage: clozePassage3, group: "Part V. Guided Cloze Test", q: "Question 29", opts: ["A. achievable", "B. impossible", "C. unlikely", "D. helpless"], ans: 0, exp: "Trở thành một mục tiêu 'có thể đạt được' (achievable)." },
            { id: 30, passage: readingPassage1_3, group: "Part VI. Reading Comprehension 1", q: "What is the main idea of the passage?", opts: ["A. The history of physical game discs.", "B. The decline of the film and music industries.", "C. The evolution and immense growth of the digital gaming industry.", "D. How to become a professional Esports player."], ans: 2, exp: "Bài đọc tập trung vào sự tiến hóa và tăng trưởng khổng lồ của ngành game số." },
            { id: 31, passage: readingPassage1_3, group: "Part VI. Reading Comprehension 1", q: "According to paragraph 2, digital distribution platforms ______", opts: ["A. require users to buy physical discs.", "B. have made it harder to access game content.", "C. allow developers to easily update games with new features.", "D. only offer games for children."], ans: 2, exp: "Đoạn 2: 'allows developers to frequently update their games with new features'." },
            { id: 32, passage: readingPassage1_3, group: "Part VI. Reading Comprehension 1", q: "The word 'surpasses' in paragraph 1 is closest in meaning to ______", opts: ["A. falls behind", "B. exceeds", "C. equals", "D. supports"], ans: 1, exp: "Surpass = exceed (vượt qua)." },
            { id: 33, passage: readingPassage1_3, group: "Part VI. Reading Comprehension 1", q: "Which of the following is NOT mentioned as a reason for gaming's popularity?", opts: ["A. Digital distribution convenience", "B. The ability to connect with friends globally", "C. The high cost of gaming consoles", "D. The rise of Esports and competitive gaming"], ans: 2, exp: "Chi phí cao (C) không được nhắc đến là lý do tạo nên sự phổ biến." },
            { id: 34, passage: readingPassage1_3, group: "Part VI. Reading Comprehension 1", q: "The word 'their' in paragraph 3 refers to ______", opts: ["A. geographical boundaries", "B. passionate fans", "C. multiplayer titles", "D. stadiums"], ans: 1, exp: "cheering for their favorite professional teams -> their chỉ passionate fans." },
            { id: 35, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "What is the primary purpose of the passage?", opts: ["A. To persuade students to choose specialized academies.", "B. To discuss the various factors involved in choosing the right university.", "C. To argue that university rankings are completely useless.", "D. To explain how to apply for university scholarships."], ans: 1, exp: "Bài bàn về các yếu tố (học thuật, văn hóa, tài chính) khi chọn trường đại học." },
            { id: 36, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "According to paragraph 2, why might focusing only on university rankings be a mistake?", opts: ["A. Because rankings change every single day.", "B. Because rankings do not account for teaching style or hands-on opportunities.", "C. Because prestigious universities always have poor faculty.", "D. Because highly ranked universities are always too expensive."], ans: 1, exp: "Bảng xếp hạng không thể hiện được phong cách giảng dạy hay cơ hội thực hành." },
            { id: 37, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "The word 'thrive' in paragraph 3 is closest in meaning to ______", opts: ["A. fail", "B. struggle", "C. flourish", "D. hide"], ans: 2, exp: "Thrive = flourish (phát triển mạnh, nở rộ)." },
            { id: 38, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "According to the passage, extracurricular activities ______", opts: ["A. are a distraction from academic studies.", "B. help students develop personal growth and leadership skills.", "C. are only available at large public universities.", "D. increase tuition fees significantly."], ans: 1, exp: "Đoạn 3: '...fostering personal growth and leadership skills.'" },
            { id: 39, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "The phrase 'the final choice' in paragraph 4 refers to ______", opts: ["A. the decision of which university to attend.", "B. the choice of which club to join.", "C. the decision to apply for financial aid.", "D. the choice of a future career."], ans: 0, exp: "Sự lựa chọn cuối cùng chính là quyết định học trường nào." },
            { id: 40, passage: readingPassage2_3, group: "Part VII. Reading Comprehension 2", q: "Which of the following can be inferred from the passage?", opts: ["A. The most famous university is always the best choice for every student.", "B. Financial planning is an important part of the university selection process.", "C. Students should ignore campus culture when choosing a school.", "D. Specialized academies do not offer extracurricular activities."], ans: 1, exp: "Đoạn cuối: chi phí thường quyết định sự lựa chọn -> lập kế hoạch tài chính là quan trọng." }
        ];

// ------------------ LOGIC UI VÀ ĐIỀU HƯỚNG BẢO VỆ ------------------
        
// [MỚI] Thêm tham số pushToHistory để kiểm soát lịch sử duyệt web
        window.showPage = function(pageId, tabId = 'listening', pushToHistory = true) {
            if (isTakingExam) {
                const confirmExit = confirm("⚠️ CẢNH BÁO: Bạn đang trong phòng thi! Nếu thoát ra, toàn bộ tiến trình làm bài sẽ bị mất. Bạn có chắc chắn muốn thoát?");
                if (!confirmExit) return; 
                
                isTakingExam = false;
                
                if (typeof thptTimerInterval !== 'undefined') clearInterval(thptTimerInterval);
                if (typeof ieltsTimerInterval !== 'undefined') clearInterval(ieltsTimerInterval);
                if (typeof ieltsReadingTimerInterval !== 'undefined') clearInterval(ieltsReadingTimerInterval);

                const audioEl = document.getElementById('ielts-audio');
                if (audioEl) {
                    audioEl.pause();
                    audioEl.currentTime = 0;
                }

                // SỬA LỖI TẠI ĐÂY: Bổ sung các thanh Bottom Nav vào danh sách cần ẩn
                const elementsToHide = [
                    'thpt-exam-room', 'ielts-exam-room', 'ielts-reading-exam-room',
                    'ielts-reading-result-dashboard', 'ielts-reading-explanation-area',
                    'strict-bottom-nav', 'strict-reading-bottom-nav' 
                ];
                
                elementsToHide.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.classList.add('hidden');
                        el.classList.remove('flex'); // Đảm bảo gỡ class flex của thanh nav
                    }
                });

                // Khôi phục lại padding cho các vùng nội dung làm bài
                const ieltsContent = document.getElementById('ielts-exam-content');
                if (ieltsContent) ieltsContent.style.paddingBottom = "0px";
                
                const readingContainer = document.getElementById('reading-split-container');
                if (readingContainer) readingContainer.style.paddingBottom = "0px";

                // Bật lại thanh header cho reading nếu nó bị ẩn
                const topHeader = document.querySelector('#ielts-reading-exam-room > div.fixed');
                if (topHeader) topHeader.classList.remove('hidden');

// Bật lại thanh header và nội dung cho Listening
                const topHeaderListen = document.querySelector('#ielts-exam-room > div.fixed');
                if (topHeaderListen) topHeaderListen.classList.remove('hidden');
                
                const mainContentListen = document.getElementById('ielts-exam-content');
                if (mainContentListen && mainContentListen.parentElement) mainContentListen.parentElement.classList.remove('hidden');
                
                const elementsToShow = ['thpt-dashboard', 'ielts-dashboard'];
                elementsToShow.forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.classList.remove('hidden');
                });

                const audioTimeEl = document.getElementById('audio-time');
                if (audioTimeEl) audioTimeEl.innerText = "00:00";
            }

            // [MỚI] Ghi lại lịch sử vào thanh URL của trình duyệt bằng dấu #
            if (pushToHistory) {
                let newHash = '#' + pageId;
                if (pageId === 'ielts') newHash += '/' + tabId; 
                
                if (window.location.hash !== newHash) {
                    try {
                        window.history.pushState({ pageId: pageId, tabId: tabId }, "", newHash);
                    } catch (e) {
                        window.location.hash = newHash; // Fix lỗi khi chạy file local
                    }
                }
            }

            document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('bg-cyan-50', 'dark:bg-slate-700', 'text-[#ff5e00]');
            });

            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                targetPage.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
            }

            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`showPage('${pageId}'`)) {
                    link.classList.add('bg-cyan-50', 'dark:bg-slate-700', 'text-[#ff5e00]');
                }
            });

            const navMenu = document.getElementById('nav-menu');
            if (navMenu && !navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                navMenu.classList.add('hidden');
            }

            if (pageId === 'ielts') showIeltsTab(tabId, pushToHistory);
        }

        window.showIeltsTab = function(tabId, pushToHistory = true) {
            const tabs = ['listening', 'reading', 'speaking', 'writing'];
            tabs.forEach(tab => {
                const contentEl = document.getElementById(`ielts-content-${tab}`);
                const btnEl = document.getElementById(`ielts-btn-${tab}`);
                if (contentEl && btnEl) {
                    if (tab === tabId) {
                        contentEl.classList.remove('hidden');
                        btnEl.className = 'px-6 py-2 rounded-full font-bold transition shadow-md bg-cyan-500 text-white transform scale-105';
                    } else {
                        contentEl.classList.add('hidden');
                        btnEl.className = 'px-6 py-2 rounded-full font-bold transition bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600';
                    }
                }
            });

            // [MỚI] Cập nhật URL khi chuyển đổi qua lại giữa các tab IELTS
            if (pushToHistory) {
                let newHash = '#ielts/' + tabId;
                if (window.location.hash !== newHash) {
                    window.history.pushState({ pageId: 'ielts', tabId: tabId }, "", newHash);
                }
            }
        }

        // Tối ưu hàm reveal khi người dùng scroll chuột
        function initScrollReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.05 }); // Giảm threshold để nhạy hơn
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            document.getElementById('nav-menu').classList.toggle('hidden');
        });

        // ------------------ LOGIC PHÒNG THI IELTS LISTENING ------------------
        let ieltsTimerInterval;
        let currentIeltsTestName = "";
        const audioElement = document.getElementById('ielts-audio');

                
     // HÀM ĐÃ SỬA: Tự động cập nhật điểm lên vòng tròn cho TẤT CẢ các kỹ năng (Listening, Reading,...)
        window.updateDashboardScore = function(testName, score) {
            // Thay vì chỉ tìm trong #ielts-content-listening, ta tìm trong toàn bộ #ielts-dashboard
            const testTitles = document.querySelectorAll('#ielts-dashboard h4');
            
            testTitles.forEach(title => {
                // Kiểm tra xem tên bài thi có khớp không
                if (title.innerText.trim() === testName) {
                    const card = title.closest('.group');
                    if (card) {
                        const circle = card.querySelector('.rounded-full');
                        if (circle) {
                            // Cập nhật điểm số
                            circle.innerHTML = score.toFixed(1);
                            
                            // Đổi màu sắc vòng tròn dựa trên điểm số
                            let newClass = "w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ";
                            if (score >= 7.0) {
                                newClass += "border-emerald-400 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30";
                            } else if (score >= 5.0) {
                                newClass += "border-blue-400 text-blue-600 bg-blue-50 dark:bg-blue-900/30";
                            } else {
                                newClass += "border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-900/30";
                            }
                            circle.className = newClass;
                            
                            // Cập nhật dòng trạng thái
                            const statusText = card.querySelector('p');
                            if(statusText && statusText.innerText.includes('Chưa hoàn thành')) {
                                statusText.innerText = "Vừa hoàn thành";
                            }
                        }
                    }
                }
            });
        };

// 1. HÀM MỞ MODAL THÔNG MINH: Tự động nhận diện Đọc/Nghe
        window.openModeModal = function(testName) {
            // --- KIỂM TRA ĐĂNG NHẬP ---
            if (!window.globalUser) {
                window.showToast("Vui lòng đăng nhập để bắt đầu làm bài thi IELTS!", "warning");
                window.openLoginModal();
                return; // Chặn không cho chạy tiếp xuống dưới
            }
            
            selectedTestForModal = testName;
            const modal = document.getElementById('mode-selection-modal');
            const content = document.getElementById('mode-modal-content');
            
            // Logic đổi tên và ẩn hiện Part 4
            const isReading = testName.toLowerCase().includes('reading');
            if (isReading) {
                document.getElementById('label-part-full').innerText = "Full passages (3 passages - 40 questions)";
                document.getElementById('label-part-1').innerText = "Passage 1 (13 questions)";
                document.getElementById('label-part-2').innerText = "Passage 2 (13 questions)";
                document.getElementById('label-part-3').innerText = "Passage 3 (14 questions)";
                
                const label4 = document.getElementById('label-container-part-4');
                if(label4) label4.classList.add('hidden'); 
                
                const cb4 = document.getElementById('cb-part-4');
                if(cb4) cb4.checked = false; 
            } else {
                document.getElementById('label-part-full').innerText = "Full parts (4 parts - 40 questions)";
                document.getElementById('label-part-1').innerText = "Part 1 (10 questions)";
                document.getElementById('label-part-2').innerText = "Part 2 (10 questions)";
                document.getElementById('label-part-3').innerText = "Part 3 (10 questions)";
                
                const label4 = document.getElementById('label-container-part-4');
                if(label4) label4.classList.remove('hidden');
                
                const cb4 = document.getElementById('cb-part-4');
                const cbFull = document.getElementById('cb-part-full');
                if(cb4 && cbFull) cb4.checked = cbFull.checked; 
            }

            if (modal && content) {
                modal.classList.remove('hidden');
                const titleEl = document.getElementById('modal-test-name');
                if(titleEl) titleEl.innerText = testName;
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }, 10);
            }
        };

        // 2. Logic Checkbox linh hoạt cho 3 hoặc 4 parts
        window.toggleAllParts = function(checkbox) {
            const isChecked = checkbox.checked;
            const isReading = selectedTestForModal.toLowerCase().includes('reading');
            const totalParts = isReading ? 3 : 4;
            for(let i=1; i<=totalParts; i++) {
                const cb = document.getElementById('cb-part-' + i);
                if(cb) cb.checked = isChecked;
            }
        };

        window.checkIndividualPart = function() {
            let allChecked = true;
            const isReading = selectedTestForModal.toLowerCase().includes('reading');
            const totalParts = isReading ? 3 : 4;
            for(let i=1; i<=totalParts; i++) {
                const cb = document.getElementById('cb-part-' + i);
                if(cb && !cb.checked) allChecked = false;
            }
            const cbFull = document.getElementById('cb-part-full');
            if(cbFull) cbFull.checked = allChecked;
        };

        // 3. Hàm phân luồng thi nhận danh sách Parts
        window.startExamFromModal = function(isStrict) {
            closeModeModal();
            let duration = 40; 
            const isReading = selectedTestForModal.toLowerCase().includes('reading');
            const totalParts = isReading ? 3 : 4;
            let selectedParts = Array.from({length: totalParts}, (_, i) => i + 1);
            
            if (!isStrict) {
                const timeSelect = document.getElementById('practice-time-select');
                if (timeSelect) duration = timeSelect.value === 'none' ? 999 : parseInt(timeSelect.value);

                selectedParts = [];
                for(let i=1; i<=totalParts; i++) {
                    const cb = document.getElementById('cb-part-' + i);
                    if (cb && cb.checked) selectedParts.push(i);
                }
                if(selectedParts.length === 0) selectedParts = Array.from({length: totalParts}, (_, i) => i + 1);
            } else {
                duration = isReading ? 60 : 40;
            }
            
            if (isReading) {
                if(typeof startIeltsReadingExam === 'function') {
                    startIeltsReadingExam(selectedTestForModal, isStrict, duration, selectedParts); 
                }
            } else {
                if(typeof startIeltsExam === 'function') {
                    startIeltsExam(selectedTestForModal, isStrict, duration, selectedParts);
                }
            }
        };

        // Biến toàn cục lưu trữ các part đang được phép hiển thị
        window.activeListeningParts = [1, 2, 3, 4];

// ========================================================
        // LOGIC PHÒNG THI IELTS LISTENING (CẬP NHẬT GIAO DIỆN THI THẬT)
        // ========================================================

// CÔNG CỤ TỰ ĐỘNG HÓA: Render Bản đồ và Bảng Tickbox
window.renderIeltsShortcodes = function(htmlText) {
    if (!htmlText) return "";

    // 1. Tự động Render Bản Đồ
    // Cú pháp người dùng nhập: [MAP:link_anh]
    let processedHtml = htmlText.replace(/\[MAP:(.+?)\]/g, function(match, imageUrl) {
        return `<div class="mb-6 flex justify-center bg-white p-4 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm">
                    <img src="${imageUrl.trim()}" alt="Map Image" class="max-w-full h-auto rounded">
                </div>`;
    });

    // 2. Tự động Render Bảng Tickbox A-I
    // Cú pháp: [TICKBOX_AI:15-Exhibition|16-Baths|17-Tools]
    processedHtml = processedHtml.replace(/\[TICKBOX_AI:(.+?)\]/g, function(match, dataString) {
        const rows = dataString.split('|');
        let tableHtml = `
            <div class="overflow-x-auto bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mt-4 mb-6">
                <table class="w-full text-center border-collapse min-w-[500px]">
                    <thead>
                        <tr class="border-b-2 border-gray-300 dark:border-slate-500 text-gray-800 dark:text-gray-200">
                            <th class="py-3 text-left pl-4 font-bold border-r border-gray-200 dark:border-slate-600 w-1/3"></th>
                            <th class="py-3 font-bold">A</th><th class="py-3 font-bold">B</th><th class="py-3 font-bold">C</th>
                            <th class="py-3 font-bold">D</th><th class="py-3 font-bold">E</th><th class="py-3 font-bold">F</th>
                            <th class="py-3 font-bold">G</th><th class="py-3 font-bold">H</th><th class="py-3 font-bold">I</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-slate-600 text-gray-700 dark:text-gray-300 font-medium">
        `;

        rows.forEach(row => {
            const parts = row.split('-');
            if (parts.length >= 2) {
                const qNum = parts[0].trim();
                const qLabel = parts.slice(1).join('-').trim(); 
                
                tableHtml += `
                    <tr class="hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                        <td class="py-3 text-left pl-4 border-r border-gray-200 dark:border-slate-600">
                            <span class="bg-gray-100 dark:bg-slate-600 border border-gray-300 dark:border-slate-500 px-2 py-1 rounded font-bold mr-2 text-sm">${qNum}</span> ${qLabel}
                        </td>
                `;
                const letters = ['A','B','C','D','E','F','G','H','I'];
                letters.forEach(letter => {
                    tableHtml += `<td><input type="radio" name="q${qNum}" value="${letter}" class="w-4 h-4 text-cyan-500 focus:ring-cyan-500 cursor-pointer"></td>`;
                });
                tableHtml += `</tr>`;
            }
        });

        tableHtml += `</tbody></table></div>`;
        return tableHtml;
    });

    return processedHtml;
};
        
        window.startIeltsExam = function(testName, isStrict, customDuration = 40, selectedParts = [1, 2, 3, 4]) {
            currentIeltsTestName = testName;
            let duration = customDuration; 
            
            window.activeListeningParts = selectedParts; 
            isTakingExam = true;
window.hasShownStrictPopup = false;
            const safeUrlName = encodeURIComponent(testName.replace(/\s+/g, '-').toLowerCase());
            window.history.pushState({ pageId: 'exam', tabId: 'listening' }, "", `#exam/listening/${safeUrlName}`);
            
            document.getElementById('ielts-dashboard').classList.add('hidden');
            document.getElementById('ielts-exam-room').classList.remove('hidden');
            document.getElementById('ielts-exam-title').innerText = testName;

            // --- [ĐOẠN MÃ THÊM MỚI] BƠM DỮ LIỆU CÂU HỎI VÀO GIAO DIỆN ---
           // --- BƠM DỮ LIỆU ĐÃ QUA BỘ LỌC TỰ ĐỘNG ---
            const testData = ieltsListeningDatabase[testName];
            if (testData && testData.content) {
                document.getElementById('ielts-part-1-content').innerHTML = window.renderIeltsShortcodes(testData.content[1]) || "<p>Đang cập nhật...</p>";
                document.getElementById('ielts-part-2-content').innerHTML = window.renderIeltsShortcodes(testData.content[2]) || "<p>Đang cập nhật...</p>";
                document.getElementById('ielts-part-3-content').innerHTML = window.renderIeltsShortcodes(testData.content[3]) || "<p>Đang cập nhật...</p>";
                document.getElementById('ielts-part-4-content').innerHTML = window.renderIeltsShortcodes(testData.content[4]) || "<p>Đang cập nhật...</p>";
                
                if (testData.transcript) {
                    document.getElementById('transcript-text').innerHTML = testData.transcript;
                }
            } else {
                document.getElementById('ielts-part-1-content').innerHTML = "<p class='text-center text-rose-500 font-bold py-10'>Không tìm thấy dữ liệu câu hỏi cho bài thi này.</p>";
            }
            
           // --- XỬ LÝ GIAO DIỆN "THI THẬT" (STRICT MODE) ---
            const examRoom = document.getElementById('ielts-exam-room');
            
            // Lấy trực tiếp thẻ cha chứa audio để đảm bảo luôn tìm thấy chính xác
            const audioEl = document.getElementById('ielts-audio');
            const audioControlBox = audioEl ? audioEl.parentElement : null;
            
            const oldNavigator = document.getElementById('ielts-part-navigator');
            const timerContainer = document.getElementById('ielts-timer-display').parentElement;

            // [MỚI] Lấy Header và Thanh công cụ bài thi
            const mainHeader = document.getElementById('main-header');
            const examTopBar = document.querySelector('#ielts-exam-room > div.fixed');
            
            if (isStrict) {
                // CHẾ ĐỘ THI THẬT: Ẩn giao diện cũ, dùng giao diện mới
                examRoom.classList.add('strict-mode');
                if(audioControlBox) audioControlBox.classList.add('hidden');
                if(oldNavigator) oldNavigator.classList.add('hidden');

                // [MỚI] Ẩn Menu chính và đẩy thanh làm bài lên trên cùng
                if (mainHeader) mainHeader.classList.add('hidden');
                if (examTopBar) {
                    examTopBar.classList.remove('top-[75px]', 'md:top-[88px]');
                    examTopBar.classList.add('top-4');
                }
                
                // Đổi giao diện đồng hồ sang dạng "34 minutes remaining"
                timerContainer.className = "text-gray-600 dark:text-gray-300 font-bold flex items-center gap-2";
                document.getElementById('ielts-timer-display').className = "text-sm";
                document.getElementById('ielts-timer-display').innerHTML = `${duration} minutes remaining`;
                
                // Ẩn nút Nộp bài trên Top Bar
                document.getElementById('btn-submit-ielts').classList.add('hidden');
                
                // Hiện Thanh điều hướng dưới đáy
                document.getElementById('strict-bottom-nav').classList.remove('hidden');
                document.getElementById('strict-bottom-nav').classList.add('flex');
                
                // Chừa khoảng trống phía dưới để thanh nav không đè lên câu hỏi
                document.getElementById('ielts-exam-content').style.paddingBottom = "80px";
            } else {
                // CHẾ ĐỘ LUYỆN TẬP: Giữ nguyên giao diện cũ
                examRoom.classList.remove('strict-mode');
                if(audioControlBox) audioControlBox.classList.remove('hidden');
                if(oldNavigator) oldNavigator.classList.remove('hidden');

                // [MỚI] Hiện lại Menu chính và đưa thanh làm bài về vị trí cũ
                if (mainHeader) mainHeader.classList.remove('hidden');
                if (examTopBar) {
                    examTopBar.classList.remove('top-4');
                    examTopBar.classList.add('top-[75px]', 'md:top-[88px]');
                }
                
                // Trả lại giao diện đồng hồ đếm ngược bình thường
                timerContainer.className = "bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 font-mono font-bold text-2xl px-4 py-2 rounded-xl border border-rose-200 dark:border-rose-800 flex items-center gap-2";
                document.getElementById('ielts-timer-display').className = "";
                
                document.getElementById('btn-submit-ielts').classList.remove('hidden');
                document.getElementById('strict-bottom-nav').classList.add('hidden');
                document.getElementById('strict-bottom-nav').classList.remove('flex');
                document.getElementById('ielts-exam-content').style.paddingBottom = "0px";
            }
            // ------------------------------------------------
            
            document.getElementById('btn-retake-ielts').classList.add('hidden');
            const transcriptArea = document.getElementById('ielts-transcript-area');
            if(transcriptArea) transcriptArea.classList.add('hidden');
            
            document.querySelectorAll('#ielts-exam-content input[type="text"]').forEach(input => {
                input.value = '';
                input.classList.remove('text-emerald-500', 'text-rose-500', 'line-through', 'font-black');
                input.classList.add('text-cyan-700', 'dark:text-cyan-300');
            });
            document.querySelectorAll('#ielts-exam-content input[type="checkbox"], #ielts-exam-content input[type="radio"]').forEach(cb => {
                cb.checked = false;
                cb.parentElement.classList.remove('text-emerald-500', 'text-rose-500', 'line-through', 'font-bold');
            });
            document.querySelectorAll('#ielts-exam-content span.text-emerald-500.ml-2').forEach(span => span.remove());
            
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.playbackRate = 1.0;
            document.getElementById('audio-speed').value = "1";
            document.getElementById('btn-audio-play').innerHTML = `<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>`;
            
            // Khởi chạy tab đầu tiên
            if(typeof window.switchIeltsPart === 'function') window.switchIeltsPart(selectedParts[0]);
            
            let timeInSecs = duration * 60;
            const timerDisplay = document.getElementById('ielts-timer-display');
            timerDisplay.parentElement.classList.remove('animate-pulse');
            clearInterval(ieltsTimerInterval);
            
            ieltsTimerInterval = setInterval(() => {
                timeInSecs--;
                let m = Math.floor(timeInSecs / 60).toString().padStart(2, '0');
                let s = (timeInSecs % 60).toString().padStart(2, '0');
                
                if (isStrict) {
                    timerDisplay.innerText = `${m} minutes remaining`; // Giao diện Thi thật
                } else {
                    timerDisplay.innerText = `${m}:${s}`; // Giao diện Luyện tập
                }
                
                if (timeInSecs === 300 && !isStrict) {
                    showToast("Chỉ còn 5 phút nữa!", "warning");
                    timerDisplay.parentElement.classList.add('animate-pulse');
                }
                
                if (timeInSecs <= 0) {
                    clearInterval(ieltsTimerInterval);
                    submitIeltsExam(true);
                }
            }, 1000);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.switchIeltsPart = function(partNum) {
            for(let i=1; i<=4; i++) {
                const tab = document.getElementById(`tab-part-${i}`);
                const strictTab = document.getElementById(`strict-tab-${i}`);
                const content = document.getElementById(`ielts-part-${i}-content`);
                
                if(content) {
                    if (window.activeListeningParts.includes(i)) {
                        if(i === partNum) {
                            // Chỉnh Style Tab Luyện tập
                            if(tab) tab.className = "px-6 py-2 border-b-4 border-cyan-500 font-bold text-cyan-600 dark:text-cyan-400 focus:outline-none whitespace-nowrap";
                            // Chỉnh Style Tab Thi Thật
                            if(strictTab) strictTab.className = "px-6 h-full border-b-4 border-blue-600 font-bold text-blue-600 bg-white dark:bg-slate-800 flex items-center justify-center";
                            content.classList.remove('hidden');
                        } else {
                            if(tab) tab.className = "px-6 py-2 border-b-4 border-transparent font-medium text-gray-500 hover:text-cyan-600 focus:outline-none whitespace-nowrap";
                            if(strictTab) strictTab.className = "px-6 h-full border-b-4 border-transparent font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center";
                            content.classList.add('hidden');
                        }
                        if(tab) tab.style.display = 'inline-block';
                        if(strictTab) strictTab.style.display = 'flex';
                    } else {
                        content.classList.add('hidden');
                        if(tab) tab.style.display = 'none';
                        if(strictTab) strictTab.style.display = 'none';
                    }
                }
            }
            
            audioElement.pause();
            audioElement.currentTime = 0;
            
            const currentTestData = ieltsListeningDatabase[currentIeltsTestName];
            if (currentTestData && currentTestData.audio && currentTestData.audio[partNum]) {
                audioElement.src = currentTestData.audio[partNum];
            } else {
                audioElement.src = ""; 
            }
            
            audioElement.playbackRate = parseFloat(document.getElementById('audio-speed').value);
            document.getElementById('btn-audio-play').innerHTML = `<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>`;

           // MỚI: Chỉ hiện Popup 1 lần duy nhất lúc bắt đầu
            const examRoom = document.getElementById('ielts-exam-room');
            if (examRoom.classList.contains('strict-mode')) {
                if (!window.hasShownStrictPopup) {
                    // Nếu chưa hiện bao giờ -> Hiện popup lên
                    document.getElementById('strict-audio-popup').classList.remove('hidden');
                    document.getElementById('strict-audio-popup').classList.add('flex');
                    window.hasShownStrictPopup = true; // Đánh dấu là đã hiện
                } else {
                    // Nếu đã hiện rồi (đang chuyển sang part khác) -> Tự động chạy audio luôn
                    audioElement.play().catch(e => console.log("Trình duyệt chặn autoplay", e));
                }
            }
        };

        // --- CÁC HÀM XỬ LÝ MỚI CHO STRICT MODE ---
        window.playStrictAudio = function() {
            document.getElementById('strict-audio-popup').classList.add('hidden');
            document.getElementById('strict-audio-popup').classList.remove('flex');
            audioElement.play();
        };

        window.strictNextPart = function() {
            let currentPart = 1;
            for(let i=1; i<=4; i++) {
                const content = document.getElementById(`ielts-part-${i}-content`);
                if (content && !content.classList.contains('hidden')) {
                    currentPart = i;
                    break;
                }
            }
            
            // Nếu vẫn còn part tiếp theo trong danh sách học sinh chọn -> Chuyển part
            if (currentPart < window.activeListeningParts[window.activeListeningParts.length - 1]) {
                const nextIdx = window.activeListeningParts.indexOf(currentPart) + 1;
                switchIeltsPart(window.activeListeningParts[nextIdx]);
            } else {
                // Nếu đã là Part cuối, hỏi có muốn nộp bài không
                if(confirm("Đây là phần thi cuối cùng. Bạn có chắc chắn muốn nộp bài?")) {
                    submitIeltsExam(false);
                }
            }
        };

        window.strictPrevPart = function() {
            let currentPart = 1;
            for(let i=1; i<=4; i++) {
                const content = document.getElementById(`ielts-part-${i}-content`);
                if (content && !content.classList.contains('hidden')) {
                    currentPart = i;
                    break;
                }
            }
            if (currentPart > window.activeListeningParts[0]) {
                const prevIdx = window.activeListeningParts.indexOf(currentPart) - 1;
                switchIeltsPart(window.activeListeningParts[prevIdx]);
            }
        };

       // Biến toàn cục lưu trạng thái bài làm Listening để phân tích
        window.tempListeningResultsMap = {};

window.submitIeltsExam = function(isTimeout = false) {
    if (!isTimeout) {
        if (!confirm("Bạn có chắc chắn muốn nộp bài? Các câu chưa điền sẽ tính là sai.")) return;
    }
    clearInterval(ieltsTimerInterval);
    isTakingExam = false;
    audioElement.pause();
    
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;
    let resultsMap = {};

    const currentTestData = ieltsListeningDatabase[currentIeltsTestName];
    const activeAnswers = currentTestData ? currentTestData.answers : {};

    // 1. VÒNG LẶP CHẤM ĐIỂM THÔNG MINH CHO 40 CÂU
    let i = 1;
    while (i <= 40) {
        const correctAns = activeAnswers[i];
        if (!correctAns) { 
            i++; 
            continue; 
        }

        // Trường hợp 1: Dạng Checkbox (Chọn nhiều đáp án)
        if (Array.isArray(correctAns)) {
            let startQ = i;
            let endQ = i;
            // Xác định nhóm câu hỏi dùng chung một cụm Checkbox
            while (endQ + 1 <= 40 && JSON.stringify(activeAnswers[endQ + 1]) === JSON.stringify(correctAns)) {
                endQ++;
            }

            const containerId = `ielts-mcq-${startQ}-${endQ}`;
            const container = document.getElementById(containerId);
            
            if (container) {
                const checkedNodes = container.querySelectorAll('input[type="checkbox"]:checked');
                const checkedVals = Array.from(checkedNodes).map(cb => cb.value);

                let localScore = 0;
                checkedVals.forEach(val => { if (correctAns.includes(val)) localScore++; });

                for (let q = startQ; q <= endQ; q++) {
                    if (localScore > 0) {
                        correctCount++;
                        resultsMap[q] = "C";
                        localScore--;
                    } else if (checkedVals.length === 0) {
                        skippedCount++;
                        resultsMap[q] = "S";
                    } else {
                        incorrectCount++;
                        resultsMap[q] = "I";
                    }
                }

                container.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                    if (correctAns.includes(cb.value)) cb.parentElement.classList.add('text-emerald-500', 'font-bold');
                    else if (cb.checked) cb.parentElement.classList.add('text-rose-500', 'line-through');
                });
            } else {
                for(let q = startQ; q <= endQ; q++) { resultsMap[q] = "S"; skippedCount++; }
            }
            i = endQ + 1; // Nhảy cóc qua nhóm câu hỏi vừa chấm
        } 
        // Trường hợp 2: Dạng Điền từ hoặc Trắc nghiệm Radio
        else {
            const textInput = document.getElementById(`ielts-ans-${i}`);
            const radios = document.querySelectorAll(`input[name="q${i}"]`);

            // Nếu là ô điền từ (Text Input)
            if (textInput) {
                const userVal = textInput.value.trim().toLowerCase();
                const correctStr = String(correctAns).toLowerCase();
                textInput.classList.remove('text-cyan-700', 'dark:text-cyan-300');

                // Xử lý trường hợp có nhiều cách viết đúng (phân cách bằng dấu '/')
                const possibleAnswers = correctStr.split('/').map(s => s.trim());

                if (userVal === "") {
                    skippedCount++;
                    resultsMap[i] = "S";
                } else if (possibleAnswers.includes(userVal)) {
                    correctCount++;
                    resultsMap[i] = "C";
                    textInput.classList.add('text-emerald-500', 'font-black');
                } else {
                    incorrectCount++;
                    resultsMap[i] = "I";
                    textInput.classList.add('text-rose-500', 'line-through');
                }

                if (!possibleAnswers.includes(userVal) && correctStr !== "") {
                    if (!textInput.nextElementSibling || textInput.nextElementSibling.tagName !== 'SPAN') {
                        const span = document.createElement('span');
                        span.className = "text-emerald-500 font-bold ml-2 text-sm";
                        span.innerText = `(${possibleAnswers[0].toUpperCase()})`;
                        textInput.parentNode.insertBefore(span, textInput.nextSibling);
                    }
                }
            } 
            // Nếu là Trắc nghiệm 1 đáp án (Radio)
            else if (radios.length > 0) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (!selected) {
                    skippedCount++;
                    resultsMap[i] = "S";
                } else if (selected.value === String(correctAns)) {
                    correctCount++;
                    resultsMap[i] = "C";
                } else {
                    incorrectCount++;
                    resultsMap[i] = "I";
                }

                radios.forEach(radio => {
                    if (radio.value === String(correctAns)) radio.parentElement.classList.add('text-emerald-500', 'font-bold');
                    else if (radio.checked) radio.parentElement.classList.add('text-rose-500', 'line-through');
                });
            } else {
                skippedCount++;
                resultsMap[i] = "S";
            }
            i++;
        }
    }

    // 2. TÍNH ĐIỂM (BAND SCORE)
    let bandScore = 1.0;
    if(correctCount >= 39) bandScore = 9.0;
    else if(correctCount >= 37) bandScore = 8.5;
    else if(correctCount >= 35) bandScore = 8.0;
    else if(correctCount >= 32) bandScore = 7.5;
    else if(correctCount >= 30) bandScore = 7.0;
    else if(correctCount >= 26) bandScore = 6.5;
    else if(correctCount >= 23) bandScore = 6.0;
    else if(correctCount >= 18) bandScore = 5.5;
    else if(correctCount >= 16) bandScore = 5.0;
    else if(correctCount >= 13) bandScore = 4.5;
    else if(correctCount >= 10) bandScore = 4.0;
    else bandScore = 3.5;

    window.tempListeningResultsMap = resultsMap;

    // 3. ĐIỀU HƯỚNG GIAO DIỆN (Sửa lỗi lồng thẻ màn hình)

// [MỚI] Hiển thị lại Menu chính sau khi thi xong
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) mainHeader.classList.remove('hidden');
    
    const topHeaderListen = document.querySelector('#ielts-exam-room > div.fixed');
    if (topHeaderListen) topHeaderListen.classList.add('hidden');

    const mainContentWrapper = document.getElementById('ielts-exam-content').parentElement;
    if (mainContentWrapper) mainContentWrapper.classList.add('hidden');

    const bottomNavListen = document.getElementById('strict-bottom-nav');
    if (bottomNavListen) {
        bottomNavListen.classList.add('hidden');
        bottomNavListen.classList.remove('flex');
    }
    
    document.getElementById('ielts-listening-result-dashboard').classList.remove('hidden');
    
    // 4. HIỂN THỊ KẾT QUẢ
    document.getElementById('listen-band-score-display').innerText = bandScore.toFixed(1);
    document.getElementById('listen-correct-count-display').innerText = `${correctCount}/40`;
    document.getElementById('listen-stat-correct').innerText = correctCount;
    document.getElementById('listen-stat-incorrect').innerText = incorrectCount;
    document.getElementById('listen-stat-skipped').innerText = skippedCount;

    let advice = "Giai đoạn đầu luôn khó khăn, hãy kiên trì mỗi ngày nhé!";
    if(bandScore >= 8.0) advice = "Xuất sắc! Kỹ năng nghe của bạn đã ở mức thượng thừa.";
    else if(bandScore >= 6.5) advice = "Rất tốt! Giữ vững phong độ này khi thi thật nhé.";
    document.getElementById('listen-advice-text').innerText = advice;

    // 5. BẢNG PHÂN TÍCH THEO PART (Sử dụng cách chia Part tổng quát để an toàn cho mọi loại đề)
    const listenGroups = {
        "Part 1 (Questions 1-10)": [1,2,3,4,5,6,7,8,9,10],
        "Part 2 (Questions 11-20)": [11,12,13,14,15,16,17,18,19,20],
        "Part 3 (Questions 21-30)": [21,22,23,24,25,26,27,28,29,30],
        "Part 4 (Questions 31-40)": [31,32,33,34,35,36,37,38,39,40]
    };
    
    let tableHtml = '';
    for (const [type, qList] of Object.entries(listenGroups)) {
        let gC = 0, gI = 0, gS = 0;
        qList.forEach(q => {
            if(resultsMap[q] === "C") gC++;
            else if(resultsMap[q] === "I") gI++;
            else gS++;
        });
        tableHtml += `
            <tr class="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition">
                <td class="py-4 px-6 font-bold text-gray-800 dark:text-gray-200">${type}</td>
                <td class="py-4 px-6 text-center font-bold">${qList.length}</td>
                <td class="py-4 px-6 text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/10 rounded-lg">${gC}</td>
                <td class="py-4 px-6 text-center text-rose-500 font-bold">${gI}</td>
                <td class="py-4 px-6 text-center text-gray-400 font-bold">${gS}</td>
            </tr>
        `;
    }
    document.getElementById('listen-analytics-body').innerHTML = tableHtml;

    if (typeof window.submitTestResult === 'function') {
        window.submitTestResult(currentIeltsTestName, parseFloat(bandScore));
    }
    if (typeof window.updateDashboardScore === 'function') {
        updateDashboardScore(currentIeltsTestName, parseFloat(bandScore));
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

        // Kích hoạt giao diện Sửa Từng Bước (Split-screen)
        window.showListeningExplanations = function() {
            document.getElementById('ielts-listening-result-dashboard').classList.add('hidden');
            document.getElementById('ielts-listening-explanation-area').classList.remove('hidden');
            
            // Sao chép nội dung bài làm từ ielts-exam-content sang cột bên trái
            const originalContent = document.getElementById('ielts-exam-content').innerHTML;
            document.getElementById('listen-exp-questions-container').innerHTML = originalContent;
            
            // Xóa class 'hidden' của các Part bị ẩn để hiện toàn bộ bài thi
            const expContainer = document.getElementById('listen-exp-questions-container');
            for(let i=1; i<=4; i++) {
                let partDiv = expContainer.querySelector(`#ielts-part-${i}-content`);
                if(partDiv) partDiv.classList.remove('hidden');
            }

            // [MÃ MỚI] Lấy dữ liệu Transcript từ database dựa trên tên bài test hiện tại
            const currentTestData = ieltsListeningDatabase[currentIeltsTestName];
            
            // Kiểm tra xem bài thi có dữ liệu transcript không, nếu có thì hiển thị, không thì báo lỗi
            if (currentTestData && currentTestData.transcript) {
                document.getElementById('listen-exp-transcript-container').innerHTML = currentTestData.transcript;
            } else {
                document.getElementById('listen-exp-transcript-container').innerHTML = "<p class='text-gray-500 italic mt-4'>Đang cập nhật dữ liệu Transcript & Giải thích cho bài thi này...</p>";
            }
        };

        window.exitToIeltsDashboardFromListen = function() {
            document.getElementById('ielts-exam-room').classList.add('hidden');
            document.getElementById('ielts-listening-result-dashboard').classList.add('hidden');
            document.getElementById('ielts-listening-explanation-area').classList.add('hidden');
            document.getElementById('ielts-dashboard').classList.remove('hidden');

            // KHÔI PHỤC LẠI GIAO DIỆN ĐỂ LẦN THI SAU KHÔNG BỊ MẤT CÂU HỎI
            const topHeaderListen = document.querySelector('#ielts-exam-room > div.fixed');
            if (topHeaderListen) topHeaderListen.classList.remove('hidden');

            const mainContentWrapper = document.getElementById('ielts-exam-content').parentElement;
            if (mainContentWrapper) mainContentWrapper.classList.remove('hidden');

            // Trả thanh địa chỉ về đúng khu vực danh sách Listening
            window.history.pushState({ pageId: 'ielts', tabId: 'listening' }, "", "#ielts/listening");
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.retakeIeltsExam = function() {
            startIeltsExam(currentIeltsTestName, false);
        }

        // --- AUDIO CONTROLS ---
        window.toggleAudio = function() {
            const btn = document.getElementById('btn-audio-play');
            if (audioElement.paused) {
                audioElement.play();
                btn.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"></path></svg>`;
            } else {
                audioElement.pause();
                btn.innerHTML = `<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>`;
            }
        };

        window.rewindAudio = function() {
            audioElement.currentTime = Math.max(0, audioElement.currentTime - 5);
        };

        window.forwardAudio = function() {
            audioElement.currentTime = Math.min(audioElement.duration, audioElement.currentTime + 5);
        };

        window.changeAudioSpeed = function() {
            audioElement.playbackRate = parseFloat(document.getElementById('audio-speed').value);
        };

        audioElement.addEventListener('timeupdate', () => {
            let m = Math.floor(audioElement.currentTime / 60).toString().padStart(2, '0');
            let s = Math.floor(audioElement.currentTime % 60).toString().padStart(2, '0');
            document.getElementById('audio-time').innerText = `${m}:${s}`;
        });

        // ------------------ LOGIC HIGHLIGHT VĂN BẢN (CHUNG) ------------------
        document.addEventListener('mouseup', function(e) {
            const examTextList = document.getElementById('ielts-exam-content');
            const examTextReadPassage = document.getElementById('reading-passage-container');
            const examTextReadQuestions = document.getElementById('reading-questions-container'); // Cho phép highlight câu hỏi
            const examTextExp = document.getElementById('exp-passage-container');
            const thptQuestions = document.getElementById('thpt-questions-container');
            const thptExplanations = document.getElementById('thpt-explanations-container');
            const tooltip = document.getElementById('highlight-tooltip');
            
            let targetNode = null;
            if (examTextList && examTextList.contains(e.target)) targetNode = examTextList;
            else if (examTextReadPassage && examTextReadPassage.contains(e.target)) targetNode = examTextReadPassage;
            else if (examTextReadQuestions && examTextReadQuestions.contains(e.target)) targetNode = examTextReadQuestions;
            else if (examTextExp && examTextExp.contains(e.target)) targetNode = examTextExp;
            else if (thptQuestions && thptQuestions.contains(e.target)) targetNode = thptQuestions;
            else if (thptExplanations && thptExplanations.contains(e.target)) targetNode = thptExplanations;
            if (!targetNode && !tooltip.contains(e.target)) {
                tooltip.classList.add('hidden');
                tooltip.classList.add('opacity-0');
                return;
            }

            const selection = window.getSelection();
            if (selection.toString().trim().length > 0 && targetNode && targetNode.contains(selection.anchorNode)) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                
                tooltip.style.top = (rect.top + window.scrollY - 45) + 'px';
                tooltip.style.left = (rect.left + window.scrollX + rect.width / 2) + 'px';
                tooltip.classList.remove('hidden');
                setTimeout(() => tooltip.classList.remove('opacity-0'), 10);
            } else {
                tooltip.classList.add('hidden');
                tooltip.classList.add('opacity-0');
            }
        });

        window.applyHighlight = function(colorClass) {
            const selection = window.getSelection();
            if (!selection.rangeCount) return;
            const range = selection.getRangeAt(0);
            
            try {
                const span = document.createElement('span');
                // Lưu thêm class định dạng để dễ xóa
                span.className = `highlight-active ${colorClass} rounded px-1 cursor-pointer transition-colors`;
                span.title = "Nháy đúp để xóa Highlight";
                
                span.ondblclick = function() {
                    const parent = this.parentNode;
                    while(this.firstChild) {
                        parent.insertBefore(this.firstChild, this);
                    }
                    parent.removeChild(this);
                };
                
                range.surroundContents(span);
            } catch (e) {
                showToast("Vui lòng bôi đen trong phạm vi một dòng hoặc đoạn văn!", "warning");
            }
            
            selection.removeAllRanges();
            const tooltip = document.getElementById('highlight-tooltip');
            tooltip.classList.add('opacity-0');
            setTimeout(() => tooltip.classList.add('hidden'), 200);
        }

        // TÍNH NĂNG MỚI: Xóa Highlight (Nút Tẩy)
        window.removeHighlight = function() {
            const selection = window.getSelection();
            if (!selection.rangeCount) return;

            let node = selection.anchorNode;
            if (node.nodeType === 3) {
                node = node.parentNode;
            }

            // Kiểm tra xem vùng được chọn có phải là span highlight không
            if (node.classList && node.classList.contains('highlight-active')) {
                const parent = node.parentNode;
                while(node.firstChild) {
                    parent.insertBefore(node.firstChild, node);
                }
                parent.removeChild(node);
                showToast("Đã xóa highlight thành công!", "success");
            } else {
                showToast("Vui lòng bôi đen đúng vào vùng chữ đang được highlight để xóa!", "warning");
            }
            
            selection.removeAllRanges();
            const tooltip = document.getElementById('highlight-tooltip');
            tooltip.classList.add('opacity-0');
            setTimeout(() => tooltip.classList.add('hidden'), 200);
        }

// TÍNH NĂNG MỚI: Cơ chế Fallback (Tra từ điển -> Nếu lỗi, tự động dịch trực tiếp)
        window.addWordToFlashcard = async function() {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();

            if (!selectedText || selectedText.split(/\s+/).length > 3) {
                showToast("Vui lòng chỉ bôi đen 1-3 từ vựng để tra cứu!", "warning");
                return;
            }

            const word = selectedText.toLowerCase();
            const isExist = vocabDatabase.find(item => item.word.toLowerCase() === word);

            if (isExist) {
                showToast(`Từ "${word}" đã có trong bộ Flashcards!`, "warning");
                return;
            }

            showToast(`Đang tra cứu từ "${word}"...`, "warning");

            // Khởi tạo các giá trị mặc định nếu không tìm thấy trong từ điển
            let type = "vocabulary";
            let phonetic = "/.../";
            let englishMeaning = "";
            let vietnameseMeaning = "";

            // LỚP 1: THỬ TRA CỨU TỪ ĐIỂN
            try {
                const dictResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
                
                if (dictResponse.ok) {
                    const data = await dictResponse.json();
                    const wordData = data[0];
                    
                    if (wordData.phonetic) phonetic = wordData.phonetic;
                    else if (wordData.phonetics && wordData.phonetics.length > 0) {
                        const validPhonetic = wordData.phonetics.find(p => p.text);
                        if (validPhonetic) phonetic = validPhonetic.text;
                    }
                    
                    type = wordData.meanings[0].partOfSpeech;
                    englishMeaning = wordData.meanings[0].definitions[0].definition;
                }
            } catch (error) {
                console.log("Từ điển không có dữ liệu, chuyển sang dịch trực tiếp.");
            }

            // LỚP 2: DỊCH NGHĨA (Dịch câu định nghĩa HOẶC dịch trực tiếp từ vựng)
            showToast(`Đang xử lý nghĩa tiếng Việt...`, "warning");
            try {
                // Nếu Lớp 1 thành công, ta dịch câu định nghĩa. Nếu Lớp 1 thất bại, ta dịch thẳng từ 'word'
                const textToTranslate = englishMeaning ? englishMeaning : word;
                
                const transResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|vi`);
                const transData = await transResponse.json();
                
                if (transData.responseData && transData.responseData.translatedText) {
                    vietnameseMeaning = transData.responseData.translatedText;
                }

                // Nếu Lớp 1 thất bại, cập nhật lại phần tiếng Anh để hiển thị cho đẹp
                if (!englishMeaning) {
                    englishMeaning = "Bản dịch trực tiếp";
                }

            } catch (transError) {
                console.error("Lỗi khi dịch thuật:", transError);
                showToast(`Không thể kết nối máy chủ dịch thuật lúc này.`, "error");
                return; // Dừng lại nếu cả 2 API đều sập
            }

            // Đẩy dữ liệu vào mảng Flashcard
            vocabDatabase.push({
                word: word,
                type: type,
                phonetic: phonetic,
                meaning: vietnameseMeaning, 
                example: `EN: ${englishMeaning}` 
            });

            saveVocabToStorage();
            updateVocabUI();

            showToast(`Đã thêm từ "${word}" vào Flashcards!`, "success");

            // Ẩn Tooltip
            const tooltip = document.getElementById('highlight-tooltip');
            tooltip.classList.add('opacity-0');
            setTimeout(() => tooltip.classList.add('hidden'), 200);
            selection.removeAllRanges();
        };

        // STREAMING_CHUNK: Integrating IELTS Reading Logic and Content...
        // ------------------ LOGIC PHÒNG THI IELTS READING ------------------
        let ieltsReadingTimerInterval;
        let currentIeltsReadingTestName = "";
        
        // Data Reading
        const ieltsReadingData = {
            1: {
                title: "The problems and benefits created by the spread of the water hyacinth in Kenya",
                content: `<p class="mb-4">Water hyacinth (Eichhornia crassipes), an aquatic plant native to South America, first appeared in countries in Africa in the early 1900s. Scientists there called it the 'world's worst aquatic weed', after it spread from the southernmost tip of Africa in the early 1900s and started obstructing major dams and rivers.</p>
                <p class="mb-4">In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves and delicate purple flowers floating in their ponds. But by the 1980s, it had 'escaped' out of the country via the Kagera river and made its way downstream to Lake Victoria. There, with no natural predators and perfect temperature conditions, the plant began spreading in the open water, blocking fishing routes and providing a new habitat for disease-carrying mosquitoes.</p>
                <p class="mb-4">For the women who smoke fish from the lake to sell it has meant declining income, as the boats that once brought the fish to shore by the hundreds struggle to navigate through the mass of plants. But water hyacinth isn't their only headache. In order to smoke the fish that they buy, they must gather huge quantities of firewood, sometimes walking as far as 10km each way to collect enough to complete their work. And each day as they cook, they breathe in the thick, grey smoke.</p>
                <p class="mb-4">About three out of four families in Kenya depend on wood or charcoal to cook their daily meals, and the rate is even higher in rural areas, Kenya's latest demographic and health survey shows. Using solid fuels like these for cooking increases indoor pollution. The World Health Organization estimates that about 14,300 Kenyans die annually as a result of indoor air pollution - most of which is caused by cooking and heating sources.</p>
                <p class="mb-4">Some years ago, on the shores of Lake Victoria, huge piles of water hyacinth that villagers had taken out of the water in an attempt to clear it were a common sight. But buried in those decaying waxy leaves was a renewable energy gold mine. It turns out the floating plant isn't just good at spreading - its foliage also contains a high ratio of carbon to nitrogen. It's a magic combination that has captivated researchers' imaginations since as early as the 1980s when, across the world, they began to explore its potential as a biofuel. Just about 4kg of the dried plant would be enough to cater for a large family's daily energy needs, early research predicted.</p>
                <p class="mb-4">In 2014, Nigerian academics announced they had got better yields of biofuel gas when they mixed the plant with chicken manure. A few years later, Kenyan scientists confirmed what their Nigerian peers and others had already found: manure worked to improve the process of converting the weed into gas.</p>
                <p class="mb-4">In 2018, the technology came to a village on the shore of Lake Victoria, called Dunga. The project promised a two-for-one solution to the dual menaces of the water hyacinth and dependence on firewood. The community received a pair of donated biogas digesters - machines that would transform a mix of water hyacinth and cow dung into biogas for cooking.</p>
                <p class="mb-4">The digesters work a bit like a stomach. The mixture goes in one end - think of it as a mouth - and over the next 20 to 30 days, it goes through a fermentation process and breaks down, giving off gas that comes out the other end. From there, the clean-burning gas is passed through pipes to the point of use, just like traditional domestic gas. In Dunga, the machines produce enough gas to serve about 60% of the village's population. It is used in domestic stoves and for other household tasks such as purifying water and incubating chicks.</p>
                <p class="mb-4">The project is testing whether biogas can provide an effective alternative to firewood and charcoal in rural Kenyan communities. Results indicate that the programme seems to be working. The women who smoke the lake fish are already getting sick less often. Besides, they don't have to devote a lot of time every day to gathering firewood, which is a great relief. As a result, they're able to make more money for their families from other enterprises.</p>
                <p class="mb-4">Kanyiva Muindi is an epidemiologist and air pollution research fellow at the African Population and Health Research Centre in Nairobi. She says families who switch to the smokeless cooking method could expect fewer respiratory diseases. Women, young girls and children are particularly vulnerable because they are the ones who cook in the kitchen or outside over fires.</p>
                <p class="mb-4">How much better the biogas stoves will be for the community's health still needs more research, says Dominic Kahumbu Wanjihia, Biogas International's chief executive. But unless the price of the machines drops, it's pretty clear that most communities will never be able to afford any, since they sell for about $750.</p>
                <p class="mb-4">Kanyiva says affordability is a challenge worth addressing, given the huge health and environmental dangers posed by 'dirty' fuels such as wood, charcoal and kerosene. If biogas could become affordable on a large scale, she says it 'would be life-changing for millions on the African continent and beyond'.</p>`,
                questions: `
                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 1-7</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Do the following statements agree with the information given in Reading Passage 1?</p>
                    <div class="space-y-4 mb-8 text-gray-800 dark:text-gray-200">
                        <div class="flex flex-col gap-2">
                            <p>1. Water hyacinth was introduced as a decorative plant in east Africa.</p>
                            <select id="read-ans-1" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>2. Fishermen took some water hyacinth plants to Lake Victoria.</p>
                            <select id="read-ans-2" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>3. It is now difficult to force boats through the thick water hyacinth on Lake Victoria.</p>
                            <select id="read-ans-3" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>4. Chemicals produced by the water hyacinth plants are affecting the numbers of fish in Lake Victoria.</p>
                            <select id="read-ans-4" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>5. Cooking with charcoal has been proved to be even worse for people's health than cooking with wood.</p>
                            <select id="read-ans-5" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>6. People found it impossible to remove much water hyacinth from Lake Victoria.</p>
                            <select id="read-ans-6" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>7. Scientists started investigating the possibility of using water hyacinth to generate biogas in the last century.</p>
                            <select id="read-ans-7" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 8-10</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.</p>
                    <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 mb-8 text-gray-800 dark:text-gray-200">
                        <h5 class="font-bold mb-4 text-center">Generating biogas for domestic use in Dunga</h5>
                        <p class="mb-4">First, place water hyacinth together with some <input type="text" id="read-ans-8" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="8"> into a digester.</p>
                        <p class="text-center mb-4">⬇</p>
                        <p class="mb-4">Leave the mixture until the <input type="text" id="read-ans-9" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="9"> is completed.</p>
                        <p class="text-center mb-4">⬇</p>
                        <p>Capture the gas emitted by the digester and use <input type="text" id="read-ans-10" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="10"> to transport it to individual homes.</p>
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 11-13</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.</p>
                    <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 mb-8 text-gray-800 dark:text-gray-200">
                        <h5 class="font-bold mb-4">Cooking with biogas in Dunga</h5>
                        <p class="font-bold underline mb-2">Benefits for the women in the village of cooking with biogas</p>
                        <ul class="list-disc pl-5 space-y-2 mb-4">
                            <li>no need for them to spend so much <input type="text" id="read-ans-11" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="11"> collecting fuel</li>
                            <li>they can focus on different tasks that bring in <input type="text" id="read-ans-12" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="12"></li>
                            <li>they are less likely to experience certain diseases connected to burning wood</li>
                        </ul>
                        <p class="font-bold underline mb-2">Drawbacks of changing to biogas</p>
                        <ul class="list-disc pl-5">
                            <li>the <input type="text" id="read-ans-13" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="13"> of the digesters is beyond the reach of most villages</li>
                        </ul>
                    </div>
                `
            },
            2: {
                title: "How could multilingualism benefit India's poorest schoolchildren?",
                content: `<p class="mb-4">The crowded and bustling streets of Delhi teem with life. Stop to listen and, above the din of rickshaws and buses, you'll hear a multitude of languages, as more than 20 million people go about their daily lives. Many were born and raised here, and many millions more have recently made India's capital their home, having moved from surrounding neighbourhoods, cities and states or across the country, often in the hope of gaining better jobs and a better life. Some arrive speaking fluent Hindi, the dominant language in Delhi (and the official language of government), but many arrive speaking any number of India's 22 officially recognised languages, let alone the hundreds of regional languages in a country of more than 1.3 billion people.</p>
                <p class="mb-4">A team of researchers led by Professor lanthi Tsimpli of Cambridge University is currently working on a project collecting data on 1,000 primary-age children in Delhi and the cities of Hyderabad and Bihar. The overriding aim of the four-year project, called 'Multilingualism and Multiliteracy', is to find out why in a country where multilingualism is so common (more than 255 million people in India speak at least two languages, and nearly 90 million speak three or more languages), the many benefits of speaking more than one language, observed in schools in Europe for instance, do not apply to many of India's schoolchildren.</p>
                <p class="mb-4">'Each year across India, 600,000 children are tested, and year after year over 50% of children in Standard 5 [ten-year-olds] cannot read a Standard 2 [seven-year-olds] task fluently, and just under 50% of them cannot solve a Standard 2 subtraction task,' says Tsimpli. She explains that low educational achievement can lead to many of these students dropping out of school - a problem disproportionately affecting female students.</p>
                <p class="mb-4">Tsimpli and her colleagues are investigating whether these low learning outcomes could be caused by an Indian school system where the language that children are taught in often differs from the language used at home. The research project, which focuses on 8 to 11-year-old schoolchildren in rural and urban areas, collects data on whether the schoolchildren live in slum* or non-slum areas. Many of the children have moved from remote, rural areas to urban areas. They are so poor they have to live in slums and, as a result of migration, they may speak languages that are different from the regional language.</p>
                <p class="mb-4">Having already tested 1,000 children, the researchers will now embark on retesting them. They intend to look not only at test results, but also at variables such as the standard of schooling, the environment and the teaching practices themselves. It's possible that one of the causes of low performance is the lack of pupil-centred teaching methods; in many Indian primary schools the teacher dominates and there is little room for independent learning.</p>
                <p class="mb-4">Although the findings are at a preliminary stage, Tsimpli and her team have found that the medium of instruction used in schools, especially English, may hold back those children who have little familiarity with, or exposure to, the language before starting school and outside of school life. According to Tsimpli, most of the evidence from this and other projects shows that English instruction for children from low socio-economic areas might not be the best way for them to learn, at least in the first three years of primary education.</p>
                <p class="mb-4">'What we would recommend for everyone, not just low socio-economic status children, would be to start learning in the language they feel comfortable learning in... English can still be used, but perhaps not as the medium of instruction in primary schools. It could, for example, be one of the subjects that are being taught alongside other subjects. We are not suggesting that English be withdrawn - that ship has sailed - but we perhaps have to think more about learner needs. There is perhaps too much uniformity in teaching and less tailoring to the children's language abilities and needs,' says Tsimpli.</p>
                <p class="mb-4">While the preliminary results show there is no difference in general intelligence among boys and girls from slum areas versus those from urban poor backgrounds, an unanticipated finding has been that children from slum backgrounds do not seem to lag behind children from other urban poor backgrounds - and in some cases outperform them (e.g. in numeracy and literacy tasks). According to the researchers, this unexpected finding may be down to the life experiences of children growing up in slums. They are likely to mature faster and come into closer contact with the numeracy skills essential for day-to-day survival.</p>
                <p class="mb-4">The project has already caught the attention of government ministers, who are keen to use the findings of the study to inform and adjust school policy in Delhi and the wider state. 'They are as keen as us to understand how the challenging context of deprivation can be attenuated when focusing on the languages children learn and use while at school. Our findings don't mean you're doomed if you're poor. It may be that these low learning outcomes are because of the way education is provided in India, with a huge focus on Hindi and English as the mediums of instruction, to the potential detriment of children unfamiliar with those languages,' explains Tsimpli.</p>
                <p class="mb-4">'Language is central to the way knowledge is transferred - so the medium of instruction is obviously hugely influential. We hope to ... show that problem solving, numeracy and literacy can and do improve in children who are educated in a language of instruction they know. The trick may be to bridge school skills with life skills and make use of the richness of a child's life experience to help them learn in the most effective ways possible,' says Tsimpli.</p>`,
                questions: `
                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 14-19</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the summary using the list of words, A-J, below.</p>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                        <ul class="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <li>A. basic outlook</li><li>B. employment opportunities</li><li>C. wealthy visitors</li>
                            <li>D. distant country</li><li>E. primary objective</li><li>F. similar advantages</li>
                            <li>G. thriving economy</li><li>H. nearby district</li><li>I. dense population</li>
                            <li>J. new immigrants</li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 mb-8 text-gray-800 dark:text-gray-200 leading-loose">
                        <h5 class="font-bold mb-4">Multilingualism in Delhi</h5>
                        The city of Delhi has a <input type="text" id="read-ans-14" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> and as you walk through its streets you hear people speaking a variety of languages. Some of them have spent their entire life in Delhi, while others are <input type="text" id="read-ans-15" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1">. Whether they have come from a <input type="text" id="read-ans-16" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> or have travelled from the other side of India, they have all come in search of things such as improved <input type="text" id="read-ans-17" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1">.
                        <br><br>
                        A team of researchers led by Professor lanthi Tsimpli of Cambridge University is collecting data on primary-age schoolchildren in Delhi and other Indian cities. The <input type="text" id="read-ans-18" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> of the research is to discover why multilingual Indian schoolchildren do not experience <input type="text" id="read-ans-19" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> to those that multilingual schoolchildren in Europe experience.
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 20-23</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Do the following statements agree with the claims of the writer in Reading Passage 2?</p>
                    <div class="space-y-4 mb-8 text-gray-800 dark:text-gray-200">
                        <div class="flex flex-col gap-2">
                            <p>20. Ten-year-old Indian schoolchildren tend to perform better in literacy tests than in numeracy tests.</p>
                            <select id="read-ans-20" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>21. Tsimpli had problems convincing some female students to take part in the study.</p>
                            <select id="read-ans-21" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>22. Tsimpli and her team wanted to know if there is a connection between poor academic performance and being taught in an unfamiliar language.</p>
                            <select id="read-ans-22" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>23. The researchers have decided against investigating the impact teaching methodology may have on learning outcomes.</p>
                            <select id="read-ans-23" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 24-26</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Choose the correct letter, A, B, C or D.</p>
                    <div class="space-y-6 mb-8 dark:text-white">
                        <div id="rq24-container">
                            <p class="font-semibold mb-2">24. What point does the writer make about primary schools in India in the sixth paragraph?</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq24" value="A"> A. Exposure to English outside of school is of limited benefit.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq24" value="B"> B. Children learn English more easily when they are well motivated.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq24" value="C"> C. Poor children may be disadvantaged further by being instructed in English.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq24" value="D"> D. There is little consistency across schools with regard to instruction in English.</label>
                            </div>
                        </div>
                        <div id="rq25-container">
                            <p class="font-semibold mb-2">25. What is Tsimpli suggesting when she uses the phrase 'that ship has sailed'?</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq25" value="A"> A. The findings of the report may be of little help to some Indian schoolchildren.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq25" value="B"> B. Instruction in English could be better adapted to the needs of schoolchildren.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq25" value="C"> C. Schools have had limited success in teaching English as a separate subject.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq25" value="D"> D. It is too late to remove English completely as a language of instruction in schools.</label>
                            </div>
                        </div>
                        <div id="rq26-container">
                            <p class="font-semibold mb-2">26. In the eighth paragraph, what do we learn has surprised researchers?</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq26" value="A"> A. Boys and girls from low socio-economic groups have similar general intelligence levels.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq26" value="B"> B. The age at which children move into a slum does not affect their academic performance.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq26" value="C"> C. Slum children and children from other urban poor backgrounds have similar life experiences.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq26" value="D"> D. The literacy and numeracy skills of slum children are not lower than those of children from other urban poor backgrounds.</label>
                            </div>
                        </div>
                    </div>
                `
            },
            3: {
                title: "The Globemakers: The Curious Story of an Ancient Craft",
                content: `<p class="mb-4">In 2008, Peter Bellerby, who lived in London, wanted to give his father a model globe for his eightieth birthday. What seemed simple enough to start with triggered an almost obsessive, decade-long journey, marked by a series of obstacles that would have deterred anyone less determined. It ended with his establishing the world's only bespoke globemaking company.</p>
                <p class="mb-4">The first surprise in The Globemakers, Bellerby's account of this impulsive enterprise, is that obtaining such a globe was not simply a matter of a quick online order and a repressed sigh at the shipping costs. After all, contrary to stubbornly held popular views of our ancestors' geographical ignorance, we have known that the world is spherical since at least the 6th century BCE. The ancient Greek philosopher Plato in his work Phaedo likened it to a leather ball, while the accolade of producing the first recorded globe goes to the ancient Greek philosopher Crates of Mallus, who is said to have made one in around 150 BCE. Surely, Bellerby reasoned, a good-quality globe wouldn't be difficult to find.</p>
                <p class="mb-4">Nearly two millennia later, however, it seemed that the art of globemaking had been largely forgotten. Bellerby came across shoddy commercial versions designed for school classrooms and genuine antiques in auction houses that would have bust his budget. Even his trips to Morocco and India, where surely the knowledge of artisan cartographers* had been preserved, drew a blank.</p>
                <p class="mb-4">Not one to be easily thwarted, Bellerby decided to make his own good-quality globe. In the process, almost everything that could possibly go wrong did so. Even the shape of the Earth posed a problem, as it is not quite a perfect sphere, but oblate (slightly flattened at the poles). Having decided to compromise and opt for two half-spherical pieces that could be fitted together, he was unable to discover anyone capable of casting moulds with sufficient accuracy to ensure that he would not be left with two half-spheres that were not quite the same circumference. Even after he eventually resolved this issue, extracting these from the moulds resulted in piles of cracked plaster of Paris** and clouds of choking dust in the workshop he had set up at the rear of his house.</p>
                <p class="mb-4">This series of abortive experiments taught Bellerby a lot about the challenges of making globes, which he communicates here to the reader. Finding just the right way to prise the globes from the mould a high-end air compressor finally did the trick - and locating the right paper and inks with which to make the gores (the sections of flat sheet mapping that are pasted onto the spherical globe) without the ink seeping out to create a mushy, unreadable mess took months and an alarming chunk out of his bank balance. Bellerby's frustration at the painstaking process of attaching the gores to the globe surface - after having found a glue with precisely the right adhesive qualities - is palpable. Right at the end of the process, he learnt that the paper had stretched slightly and so the final one overlapped the first by a centimetre (which may not seem a great deal, but when that represents 2 per cent of the Earth's diameter, it's equivalent to obliterating the Himalayas or wiping out Chile).</p>
                <p class="mb-4">Bellerby's account of the technical challenges of globe production is interspersed with a series of interludes on great globemakers of the past and cartographic history in general. Purists might wish for more map-making details, but Bellerby clearly found a kindred spirit in Martin Behaim. He was the Nuremberg entrepreneur who in 1492 created the Erdapfel, the world's oldest surviving globe, beautifully finished by a workshop of painters and other craftsmen, only to find that the explorer Christopher Columbus had stumbled upon the Americas the very same year, rendering his masterpiece instantly out of date. Something of Bellerby's unflinching ambition is reflected in the even more heroic efforts of the Italian cartographer Vincenzo Coronelli, who, in the seventeenth century, created two globes for Louis XIV of France. It took him twenty years to complete the monstrous pair, whose vast bulk - each with a diameter of around four metres - can still be admired in the National Library of France in Paris.</p>
                <p class="mb-4">Although a celebration of the revival of an ancient craft, Bellerby's book is also a lament for the fading away of centuries-old traditions. When he embarked on his globemaking odyssey, he struggled to find artisans with the skills to make the right moulds for the globes or foundries that could shape the meridians (the metal frames which girdle globes) in just the right way. Although he finally located the right craftsmen, some simply dropping in, serendipitously, to his workshop (by now in more suitable premises than his back room), many of these have now retired or passed away.</p>
                <p class="mb-4">Bellerby's father finally did receive his eightieth birthday present, albeit two years late. Bellerby went on to found a company which now turns out over six hundred globes a year for customers who can have their own tiny village marked or more unusual requests fulfilled. His book, beautifully illustrated with photographs of the various stages of his venture and a few illustrations of historic globes and maps, is hardly a blueprint for commercial success. But it is more than enough to stir up admiration for the craftsmanship of the great mapmakers of the past and the obsessive determination of a modern successor who revived their almost moribund art.</p>`,
                questions: `
                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 27-32</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the summary using the list of words, A-J, below.</p>
                    <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                        <ul class="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <li>A. educational use</li><li>B. rare materials</li><li>C. inferior makes</li>
                            <li>D. product exchange markets</li><li>E. necessary skills</li><li>F. international</li>
                            <li>G. challenging task</li><li>H. memorable object</li><li>I. internet purchase</li>
                            <li>J. numerous problems</li>
                        </ul>
                    </div>
                    <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 mb-8 text-gray-800 dark:text-gray-200 leading-loose">
                        <h5 class="font-bold mb-4">A birthday gift</h5>
                        Peter Bellerby's plan to give his father a globe for his birthday was an unexpectedly <input type="text" id="read-ans-27" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> for which he had to overcome <input type="text" id="read-ans-28" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1">.
                        <br><br>
                        He soon learnt that a straightforward <input type="text" id="read-ans-29" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> would not be possible. Some <input type="text" id="read-ans-30" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> that had been intended for <input type="text" id="read-ans-31" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"> were available, as were some expensive antique globes, but these were beyond his budget. He even travelled to places where people might still have the <input type="text" id="read-ans-32" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1">, but Bellerby could not find what he wanted.
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 33-36</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Do the following statements agree with the claims of the writer in Reading Passage 3?</p>
                    <div class="space-y-4 mb-8 text-gray-800 dark:text-gray-200">
                        <div class="flex flex-col gap-2">
                            <p>33. The assumption today that people in the past knew very little about geography is correct.</p>
                            <select id="read-ans-33" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>34. Plato was criticised for saying the world was shaped like a leather ball.</p>
                            <select id="read-ans-34" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>35. The globe made by Crates of Mallus was an accurate representation of the known world.</p>
                            <select id="read-ans-35" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p>36. Bellerby assumed he would have few problems locating a well-made globe.</p>
                            <select id="read-ans-36" class="border border-cyan-500 rounded p-1 w-32 bg-transparent text-cyan-700 dark:text-cyan-300 font-bold focus:outline-none">
                                <option value=""></option><option value="YES">YES</option><option value="NO">NO</option><option value="NOT GIVEN">NOT GIVEN</option>
                            </select>
                        </div>
                    </div>

                    <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">Questions 37-40</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Choose the correct letter, A, B, C or D.</p>
                    <div class="space-y-6 mb-8 dark:text-white">
                        <div id="rq37-container">
                            <p class="font-semibold mb-2">37. When Bellerby had to attach the gores to the globe surface,</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq37" value="A"> A. he decided it was best to work quickly.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq37" value="B"> B. he became aware of an unexpected issue.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq37" value="C"> C. he was worried about the quality of his materials.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq37" value="D"> D. he nearly gave up the whole project.</label>
                            </div>
                        </div>
                        <div id="rq38-container">
                            <p class="font-semibold mb-2">38. The reviewer mentions other globe makers of the past because</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq38" value="A"> A. Bellerby was particularly inspired by them.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq38" value="B"> B. their achievements are not widely known.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq38" value="C"> C. Bellerby had something in common with each of them.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq38" value="D"> D. their difficulties could have been avoided.</label>
                            </div>
                        </div>
                        <div id="rq39-container">
                            <p class="font-semibold mb-2">39. What point is made about Bellerby in the seventh paragraph?</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq39" value="A"> A. He had long working relationships with numerous craftsmen.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq39" value="B"> B. He understands the lack of interest in traditional crafts.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq39" value="C"> C. He appreciates the importance of careful planning.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq39" value="D"> D. He regrets the loss of many globe-making skills.</label>
                            </div>
                        </div>
                        <div id="rq40-container">
                            <p class="font-semibold mb-2">40. What does the reviewer say about Bellerby's book in the final paragraph?</p>
                            <div class="ml-4 space-y-1">
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq40" value="A"> A. It does not tell you how to create a profitable business.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq40" value="B"> B. It overlooks some important mapmakers.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq40" value="C"> C. It fails to discuss the future of globe-making.</label>
                                <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="rq40" value="D"> D. It does not give enough details about individual customers.</label>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        const ieltsReadingAnswers = {
            1: "TRUE", 2: "FALSE", 3: "TRUE", 4: "NOT GIVEN", 5: "NOT GIVEN", 6: "FALSE", 7: "TRUE",
            8: "cow dung", 9: "fermentation", 10: "pipes", 11: "time", 12: "money", 13: "price",
            14: "I", 15: "J", 16: "H", 17: "B", 18: "E", 19: "F",
            20: "NO", 21: "NOT GIVEN", 22: "YES", 23: "NO",
            24: "C", 25: "D", 26: "D",
            27: "G", 28: "J", 29: "I", 30: "C", 31: "A", 32: "E",
            33: "NO", 34: "NOT GIVEN", 35: "NOT GIVEN", 36: "YES",
            37: "B", 38: "C", 39: "D", 40: "A"
        };

        const ieltsReadingExplanations = {
            1: "In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves and delicate purple flowers floating in their ponds",
            2: "it had 'escaped' out of the country via the Kagera river and made its way downstream to Lake Victoria",
            3: "as the boats that once brought the fish to shore by the hundreds struggle to navigate through the mass of plants",
            6: "Some years ago, on the shores of Lake Victoria, huge piles of water hyacinth that villagers had taken out of the water in an attempt to clear it were a common sight",
            7: "It's a magic combination that has captivated researchers' imaginations since as early as the 1980s when, across the world, they began to explore its potential as a biofuel",
            8: "The community received a pair of donated biogas digesters - machines that would transform a mix of water hyacinth and cow dung into biogas for cooking",
            9: "The mixture goes in one end - think of it as a mouth and over the next 20 to 30 days, it goes through a fermentation process and breaks down, giving off gas that comes out the other end",
            10: "From there, the clean-burning gas is passed through pipes to the point of use, just like traditional domestic gas",
            11: "Besides, they don't have to devote a lot of time every day to gathering firewood, which is a great relief",
            12: "As a result, they're able to make more money for their families from other enterprises",
            13: "But unless the price of the machines drops, it's pretty clear that most communities will never be able to afford any, since they sell for about $750",
            14: "The crowded and bustling streets of Delhi teem with life. Stop to listen and, above the din of rickshaws and buses, you'll hear a multitude of languages, as more than 20 million people go about their daily lives",
            15: "Many were born and raised here, and many millions more have recently made India's capital their home, having moved from surrounding neighbourhoods, cities and states or across the country, often in the hope of gaining better jobs and a better life",
            16: "Many were born and raised here, and many millions more have recently made India's capital their home, having moved from surrounding neighbourhoods, cities and states or across the country, often in the hope of gaining better jobs and a better life",
            17: "Many were born and raised here, and many millions more have recently made India's capital their home, having moved from surrounding neighbourhoods, cities and states or across the country, often in the hope of gaining better jobs and a better life",
            18: "The overriding aim of the four-year project, called 'Multilingualism and Multiliteracy', is to find out why in a country where multilingualism is so common (more than 255 million people in India speak at least two languages, and nearly 90 million speak three or more languages), the many benefits of speaking more than one language, observed in schools in Europe for instance, do not apply to many of India's schoolchildren",
            19: "The overriding aim of the four-year project, called 'Multilingualism and Multiliteracy', is to find out why in a country where multilingualism is so common (more than 255 million people in India speak at least two languages, and nearly 90 million speak three or more languages), the many benefits of speaking more than one language, observed in schools in Europe for instance, do not apply to many of India's schoolchildren",
            20: "'Each year across India, 600,000 children are tested, and year after year over 50% of children in Standard 5 [ten-year-olds] cannot read a Standard 2 [seven-year-olds] task fluently, and just under 50% of them cannot solve a Standard 2 subtraction task,' says Tsimpli",
            22: "Tsimpli and her colleagues are investigating whether these low learning outcomes could be caused by an Indian school system where the language that children are taught in often differs from the language used at home",
            23: "They intend to look not only at test results, but also at variables such as the standard of schooling, the environment and the teaching practices themselves",
            24: "According to Tsimpli, most of the evidence from this and other projects shows that English instruction for children from low socio-economic areas might not be the best way for them to learn, at least in the first three years of primary education",
            25: "We are not suggesting that English be withdrawn - that ship has sailed - but we perhaps have to think more about learner needs",
            26: "an unanticipated finding has been that children from slum backgrounds do not seem to lag behind children from other urban poor backgrounds - and in some cases outperform them (e.g. in numeracy and literacy tasks)",
            27: "What seemed simple enough to start with triggered an almost obsessive, decade-long journey, marked by a series of obstacles that would have deterred anyone less determined",
            28: "In the process, almost everything that could possibly go wrong did so",
            29: "The first surprise in The Globemakers, Bellerby's account of this impulsive enterprise, is that obtaining such a globe was not simply a matter of a quick online order and a repressed sigh at the shipping costs",
            30: "Bellerby came across shoddy commercial versions designed for school classrooms",
            31: "Bellerby came across shoddy commercial versions designed for school classrooms",
            32: "Even his trips to Morocco and India, where surely the knowledge of artisan cartographers* had been preserved, drew a blank",
            33: "After all, contrary to stubbornly held popular views of our ancestors' geographical ignorance, we have known that the world is spherical since at least the 6th century BCE",
            36: "Surely, Bellerby reasoned, a good-quality globe wouldn't be difficult to find",
            37: "Bellerby's frustration at the painstaking process of attaching the gores to the globe surface - after having found a glue with precisely the right adhesive qualities - is palpable. Right at the end of the process, he learnt that the paper had stretched slightly and so the final one overlapped the first by a centimetre",
            38: "Bellerby clearly found a kindred spirit in Martin Behaim Something of Bellerby's unflinching ambition is reflected in the even more heroic efforts of the Italian cartographer Vincenzo Coronelli",
            39: "Although a celebration of the revival of an ancient craft, Bellerby's book is also a lament for the fading away of centuries-old traditions",
            40: "His book, beautifully illustrated with photographs of the various stages of his venture and a few illustrations of historic globes and maps, is hardly a blueprint for commercial success"
        };

// ==========================================
        // LOGIC PHÒNG THI THPT QUỐC GIA
        // ==========================================
        let currentThptExamId = null;
        let thptTimerInterval;
        let userThptAnswers = {};

       // 1. Hàm bắt đầu làm bài thi (Đã trang bị tính năng chống crash)
        window.startThptExam = function(examId) {
            // --- KIỂM TRA ĐĂNG NHẬP ---
            if (!window.globalUser) {
                window.showToast("Vui lòng đăng nhập để bắt đầu thi THPT Quốc Gia!", "warning");
                window.openLoginModal();
                return;
            }
            
            try {
                // Kiểm tra dữ liệu đề thi có tồn tại không
                const data = examId === 2 ? thptExamData2 : thptExamData3;
                if (!data || data.length === 0) {
                    showToast("Đề thi đang được cập nhật, vui lòng quay lại sau!", "warning");
                    return;
                }

                currentThptExamId = examId;
                userThptAnswers = {}; 
                isTakingExam = true;

                const testName = 'Đề Minh Họa Số ' + examId;
                const safeUrlName = encodeURIComponent(testName.replace(/\s+/g, '-').toLowerCase());
                window.history.pushState({ pageId: 'exam', tabId: 'thpt' }, "", `#exam/thpt/${safeUrlName}`);

                // Chuyển đổi giao diện
                document.getElementById('thpt-dashboard').classList.add('hidden');
                document.getElementById('thpt-exam-room').classList.remove('hidden');
                document.getElementById('thpt-result-room').classList.add('hidden');
                document.getElementById('thpt-exam-title').innerText = 'Đề Minh Họa Số ' + examId;

                // Render câu hỏi
                renderThptQuestions(examId);

                // Thiết lập đồng hồ
                let timeInSecs = 50 * 60;
                const timerDisplay = document.getElementById('thpt-timer-display');
                clearInterval(thptTimerInterval);
                timerDisplay.innerText = "50:00";

                thptTimerInterval = setInterval(() => {
                    timeInSecs--;
                    let m = Math.floor(timeInSecs / 60).toString().padStart(2, '0');
                    let s = (timeInSecs % 60).toString().padStart(2, '0');
                    timerDisplay.innerText = `${m}:${s}`;
                    
                    if (timeInSecs <= 0) {
                        clearInterval(thptTimerInterval);
                        submitThptExam(true);
                    }
                }, 1000);

                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (error) {
                console.error("Lỗi khi mở phòng thi THPT:", error);
                // Khôi phục lại giao diện nếu có lỗi
                document.getElementById('thpt-dashboard').classList.remove('hidden');
                document.getElementById('thpt-exam-room').classList.add('hidden');
                showToast("Đã xảy ra sự cố tải đề thi. Vui lòng làm mới trang (F5)!", "error");
            }
        };

        // 2. Hàm vẽ danh sách câu hỏi ra màn hình
        function renderThptQuestions(examId) {
            const data = examId === 2 ? thptExamData2 : thptExamData3;
            const container = document.getElementById('thpt-questions-container');
            const navContainer = document.getElementById('thpt-navigator');
            
            let html = '';
            let navHtml = '';
            let currentGroup = '';

            data.forEach(item => {
                // Hiển thị tiêu đề Nhóm câu hỏi (VD: Phần Ngữ âm)
                if (item.group !== currentGroup) {
                    html += `<div class="bg-cyan-50 dark:bg-slate-700 p-3 rounded-lg font-bold text-cyan-800 dark:text-cyan-300 mt-6 mb-4">${item.group}</div>`;
                    currentGroup = item.group;
                }

                // Hiển thị đoạn văn (nếu là câu hỏi đọc hiểu/điền từ)
                if (item.passage && (item.id === 25 || item.id === 30 || item.id === 35 || item.id === 36)) {
                    html += `<div class="bg-gray-50 dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-600 mb-6 text-gray-800 dark:text-gray-200 leading-relaxed text-base">${item.passage.replace(/\n/g, '<br><br>')}</div>`;
                }

                // Vẽ từng câu hỏi trắc nghiệm
                html += `
                    <div class="mb-6 bg-white dark:bg-darkCard p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition hover:shadow-md" id="thpt-q-${item.id}">
                        <p class="font-bold text-gray-800 dark:text-white mb-4"><span class="text-cyan-600 dark:text-cyan-400">Câu ${item.id}:</span> ${item.q.replace(/\n/g, '<br>')}</p>
                        <div class="space-y-3 ml-2">
                `;
                
                item.opts.forEach((opt, idx) => {
                    html += `
                        <label class="flex items-start gap-3 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition">
                            <input type="radio" name="thpt_q_${item.id}" value="${idx}" class="mt-1 w-4 h-4 text-cyan-500 focus:ring-cyan-500" onchange="updateThptNav(${item.id})">
                            <span class="leading-tight">${opt}</span>
                        </label>
                    `;
                });
                html += `</div></div>`;

                // Vẽ lưới nút điều hướng
                navHtml += `<button id="thpt-nav-btn-${item.id}" onclick="document.getElementById('thpt-q-${item.id}').scrollIntoView({behavior: 'smooth', block: 'center'})" class="w-10 h-10 rounded-lg border border-gray-300 dark:border-slate-600 flex items-center justify-center font-bold text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition">${item.id}</button>`;
            });

            container.innerHTML = html;
            navContainer.innerHTML = navHtml;
        }

        // 3. Hàm tô màu nút điều hướng khi đã chọn đáp án
        window.updateThptNav = function(qId) {
            const selected = document.querySelector(`input[name="thpt_q_${qId}"]:checked`);
            if (selected) {
                userThptAnswers[qId] = parseInt(selected.value);
                const btn = document.getElementById(`thpt-nav-btn-${qId}`);
                if (btn) {
                    btn.classList.remove('border-gray-300', 'text-gray-600', 'dark:text-gray-400');
                    btn.classList.add('bg-cyan-500', 'text-white', 'border-cyan-600');
                }
            }
        };

        // 4. Hàm Nộp bài và Chấm điểm
        window.submitThptExam = function(isTimeout = false) {
            if (!isTimeout) {
                if (!confirm("Bạn có chắc chắn muốn nộp bài? Các câu chưa làm sẽ bị tính là sai.")) return;
            }
            clearInterval(thptTimerInterval);
            isTakingExam = false;

            const data = currentThptExamId === 2 ? thptExamData2 : thptExamData3;
            let correctCount = 0;
            let explanationsHtml = '';

            data.forEach(item => {
                const userAns = userThptAnswers[item.id];
                const isCorrect = userAns === item.ans;
                
                if (isCorrect) correctCount++;

                // Tạo giao diện giải thích
                const statusColor = isCorrect ? 'text-emerald-500' : 'text-rose-500';
                const statusIcon = isCorrect ? '✅' : '❌';
                const userAnsText = userAns !== undefined ? item.opts[userAns] : 'Chưa chọn';
                const correctAnsText = item.opts[item.ans];

                explanationsHtml += `
                    <div class="bg-gray-50 dark:bg-slate-700/50 p-5 rounded-xl border border-gray-200 dark:border-slate-600">
                        <p class="font-bold text-gray-800 dark:text-white mb-3"><span class="text-cyan-600">Câu ${item.id}:</span> ${item.q.replace(/\n/g, '<br>')}</p>
                        <p class="text-sm mb-1 font-medium ${statusColor}">Bạn chọn: ${userAnsText} ${statusIcon}</p>
                        <p class="text-sm mb-3 font-medium text-emerald-600 dark:text-emerald-400">Đáp án đúng: ${correctAnsText}</p>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-slate-700 text-sm text-gray-700 dark:text-gray-300">
                            <span class="font-bold text-amber-500">💡 Giải thích:</span> ${item.exp}
                        </div>
                    </div>
                `;
            });

            const score10 = (correctCount / 40) * 10;

            // Chuyển sang màn hình kết quả
            document.getElementById('thpt-exam-room').classList.add('hidden');
            document.getElementById('thpt-result-room').classList.remove('hidden');
            
            document.getElementById('thpt-correct-count').innerText = correctCount;
            document.getElementById('thpt-final-score').innerText = score10.toFixed(2);
            document.getElementById('thpt-explanations-container').innerHTML = explanationsHtml;
            document.getElementById('thpt-result-title').innerText = 'Đề Minh Họa Số ' + currentThptExamId;

            // Lưu điểm lên Firebase (nếu đã đăng nhập)
            if (typeof window.submitTestResult === 'function') {
                window.submitTestResult('THPTQG - Đề Số ' + currentThptExamId, parseFloat(score10.toFixed(2)));
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // 5. Hàm quay lại danh sách
        window.exitToThptDashboard = function() {

window.history.pushState({ pageId: 'thpt', tabId: null }, "", "#thpt");
            
            document.getElementById('thpt-result-room').classList.add('hidden');
            document.getElementById('thpt-dashboard').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // ==========================================
// MODULE: IELTS READING (XÂY LẠI HOÀN TOÀN)
// ==========================================

// 1. BIẾN TOÀN CỤC CHUẨN HOÁ
window.currentReadingTest = null;
window.currentReadingPassageIndex = 1;

// 2. DỮ LIỆU ĐỀ THI MẪU
const cambridge21Test4Reading = {
    title: "Cambridge 21 - Reading Test 4",
    passages: [
        {
            id: 1,
            title: "Reading Passage 1: Water hyacinth in Kenya",
            content: `
                <p class="mb-4 text-justify">Water hyacinth (Eichhornia crassipes), an aquatic plant native to South America, first appeared in countries in Africa in the early 1900s. Scientists there called it the 'world's worst aquatic weed'.</p>
                <p class="mb-4 text-justify">In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves...</p>
            `,
            questionsHTML: `
                <div class="mb-6 text-gray-800 dark:text-gray-200">
                    <h4 class="font-bold text-lg mb-2">Questions 1-3</h4>
                    <p class="italic mb-4">Do the following statements agree with the information given in Reading Passage 1?</p>
                    <div class="space-y-4">
                        <p>1. Water hyacinth was introduced as a decorative plant in east Africa. <input type="text" class="border-b-2 border-cyan-500 bg-transparent w-20 text-center font-bold text-cyan-600 focus:outline-none"></p>
                        <p>2. Fishermen took some water hyacinth plants to Lake Victoria. <input type="text" class="border-b-2 border-cyan-500 bg-transparent w-20 text-center font-bold text-cyan-600 focus:outline-none"></p>
                    </div>
                </div>
            `
        },
        {
            id: 2,
            title: "Reading Passage 2: Multilingualism in India",
            content: `<p class="mb-4 text-justify">The crowded and bustling streets of Delhi teem with life...</p>`,
            questionsHTML: `<p class="text-gray-500 italic">Câu hỏi của Passage 2 sẽ hiển thị ở đây.</p>`
        },
        {
            id: 3,
            title: "Reading Passage 3: The Globemakers",
            content: `<p class="mb-4 text-justify">Peter Bellerby, who lived in London, wanted to give his father a model globe...</p>`,
            questionsHTML: `<p class="text-gray-500 italic">Câu hỏi của Passage 3 sẽ hiển thị ở đây.</p>`
        }
    ]
};

// 3. HÀM ĐIỀU KHIỂN BẮT ĐẦU BÀI THI
window.startIeltsReadingExam = function(testName, isStrict = false) {
    // Khởi tạo trạng thái
    isTakingExam = true;
    window.currentReadingTest = cambridge21Test4Reading;
    window.currentReadingPassageIndex = 1;

    // Chuyển đổi màn hình chính
    document.getElementById('ielts-dashboard').classList.add('hidden');
    document.getElementById('ielts-reading-exam-room').classList.remove('hidden');
    document.getElementById('ielts-reading-result-dashboard').classList.add('hidden');
    document.getElementById('ielts-reading-explanation-area').classList.add('hidden');
    
    const splitContainer = document.getElementById('reading-split-container');
    if (splitContainer) splitContainer.classList.remove('hidden');

    // Lấy các thẻ UI cần thao tác
    const mainHeader = document.getElementById('main-header');
    const topHeader = document.querySelector('#ielts-reading-exam-room > div.fixed');
    const topTabsContainer = document.getElementById('reading-tabs-container');
    const btnSubmitTop = document.getElementById('btn-submit-reading');
    const bottomNav = document.getElementById('strict-reading-bottom-nav');

    // Cấu hình giao diện theo chế độ (Luyện tập / Thi thật)
    if (isStrict) {
        if (mainHeader) mainHeader.classList.add('hidden');
        if (topHeader) {
            topHeader.classList.remove('top-[75px]', 'md:top-[88px]');
            topHeader.classList.add('top-4');
        }
        if (topTabsContainer) topTabsContainer.classList.add('hidden');
        if (btnSubmitTop) btnSubmitTop.classList.add('hidden');
        if (bottomNav) {
            bottomNav.classList.remove('hidden');
            bottomNav.classList.add('flex');
        }
        if (splitContainer) splitContainer.style.paddingBottom = "80px";
    } else {
        if (mainHeader) mainHeader.classList.remove('hidden');
        if (topHeader) {
            topHeader.classList.remove('top-4');
            topHeader.classList.add('top-[75px]', 'md:top-[88px]');
        }
        if (topTabsContainer) topTabsContainer.classList.remove('hidden');
        if (btnSubmitTop) btnSubmitTop.classList.remove('hidden');
        if (bottomNav) {
            bottomNav.classList.add('hidden');
            bottomNav.classList.remove('flex');
        }
        if (splitContainer) splitContainer.style.paddingBottom = "0px";
    }

    // Tự động load Passage 1 khi vừa vào phòng thi
    window.switchIeltsReadingPart(1);
};

// 4. HÀM CHUYỂN ĐỔI GIỮA CÁC PASSAGE
window.switchIeltsReadingPart = function(partNumber) {
    window.currentReadingPassageIndex = partNumber;

    // Cập nhật màu sắc Tab Luyện Tập
    for (let i = 1; i <= 3; i++) {
        const tab = document.getElementById('tab-read-' + i);
        if (tab) {
            tab.className = (i === partNumber) 
                ? "px-4 py-2 font-bold bg-emerald-500 text-white transition focus:outline-none" 
                : "px-4 py-2 font-bold bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-300 hover:bg-gray-200 transition focus:outline-none";
        }
    }

    // Cập nhật màu sắc Tab Thi Thật
    for (let i = 1; i <= 3; i++) {
        const strictTab = document.getElementById('strict-read-tab-' + i);
        if (strictTab) {
            strictTab.className = (i === partNumber)
                ? "px-6 h-full border-b-4 border-emerald-500 font-bold text-emerald-600 bg-white dark:bg-slate-800 flex items-center justify-center transition-colors"
                : "px-6 h-full border-b-4 border-transparent font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors";
        }
    }

    // Vẽ dữ liệu tương ứng ra màn hình
    window.renderReadingTestContent(partNumber);
};

// 5. HÀM KẾT XUẤT (RENDER) DỮ LIỆU RA MÀN HÌNH
window.renderReadingTestContent = function(passageIndex) {
    if (!window.currentReadingTest || !window.currentReadingTest.passages) return;

    const passageData = window.currentReadingTest.passages[passageIndex - 1]; 
    if (!passageData) return;

    const passageContainer = document.getElementById('reading-passage-container');
    const questionsContainer = document.getElementById('reading-questions-container');
    
    // Đổ đoạn văn
    if (passageContainer) {
        passageContainer.innerHTML = '<h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">' + passageData.title + '</h2>' + passageData.content;
    }
    
    // Đổ câu hỏi
    if (questionsContainer) {
        questionsContainer.innerHTML = passageData.questionsHTML || "";
    }
};

        window.submitIeltsReadingExam = function(isTimeout = false) {
            if (!isTimeout) {
                if (!confirm("Bạn có chắc chắn muốn nộp bài? Các câu chưa điền sẽ tính là sai.")) return;
            }
            clearInterval(ieltsReadingTimerInterval);
            isTakingExam = false;
            
            let correctCount = 0;
            let incorrectCount = 0;
            let skippedCount = 0;
            let resultsMap = {};

            for (let i = 1; i <= 40; i++) {
                let userAns = window[`userAnsRead${i}`];
                let correctAns = String(ieltsReadingAnswers[i]).toUpperCase();
                
                if (!userAns || userAns.trim() === "") {
                    skippedCount++;
                    resultsMap[i] = "S";
                } else if (userAns.trim().toUpperCase() === correctAns) {
                    correctCount++;
                    resultsMap[i] = "C";
                } else {
                    incorrectCount++;
                    resultsMap[i] = "I";
                }
            }
            
            let bandScore = 1.0;
            if(correctCount >= 39) bandScore = 9.0;
            else if(correctCount >= 37) bandScore = 8.5;
            else if(correctCount >= 35) bandScore = 8.0;
            else if(correctCount >= 33) bandScore = 7.5;
            else if(correctCount >= 30) bandScore = 7.0;
            else if(correctCount >= 27) bandScore = 6.5;
            else if(correctCount >= 23) bandScore = 6.0;
            else if(correctCount >= 19) bandScore = 5.5;
            else if(correctCount >= 15) bandScore = 5.0;
            else if(correctCount >= 13) bandScore = 4.5;
            else if(correctCount >= 10) bandScore = 4.0;
            else bandScore = 3.5;

            // 1. MỚI: Tắt hẳn luôn thanh tiêu đề cố định ở trên cùng
            const topHeader = document.querySelector('#ielts-reading-exam-room > div.fixed');
            if (topHeader) topHeader.classList.add('hidden');

            // [SỬA LỖI THÊM VÀO ĐÂY] - Hiện lại Menu chính khi nộp bài
            const mainHeader = document.getElementById('main-header');
            if (mainHeader) mainHeader.classList.remove('hidden');

            // 2. Ẩn phần câu hỏi làm bài
            const splitContainer = document.getElementById('reading-split-container');
            if (splitContainer) {
                splitContainer.classList.add('hidden');
                splitContainer.style.paddingBottom = "0px";
            }
            
            // 3. Ẩn thanh điều hướng dưới đáy
            const bottomNav = document.getElementById('strict-reading-bottom-nav');
            if (bottomNav) {
                bottomNav.classList.add('hidden');
                bottomNav.classList.remove('flex');
            }
            
            // 4. Hiện màn hình kết quả
            document.getElementById('ielts-reading-result-dashboard').classList.remove('hidden');
            
            // 5. Đổ dữ liệu điểm số
            document.getElementById('reading-correct-count-display').innerText = correctCount;
            document.getElementById('reading-stat-correct').innerText = correctCount;
            document.getElementById('reading-stat-incorrect').innerText = incorrectCount;
            document.getElementById('reading-stat-skipped').innerText = skippedCount;
            
            const circle = document.getElementById('reading-score-circle');
            const circumference = 552;
            const offset = circumference - (correctCount / 40) * circumference;
            if (circle) circle.style.strokeDashoffset = offset;
            
            document.getElementById('reading-band-score-display').innerText = bandScore.toFixed(1);
            
            let advice = "Đề IELTS hơi khó bạn nhỉ, mình cố tiếp cùng nhau nha, từ từ sẽ giỏi thôi!";
            if(bandScore >= 8.0) advice = "Wow! Tuyệt vời quá, trình độ của bạn đã đạt chuẩn Master rồi đó! 🎉";
            else if(bandScore >= 6.5) advice = "Làm tốt lắm! Bạn đã rất gần với aim 7.0+ rồi, luyện thêm chút nữa nhé! 💪";
            document.getElementById('reading-advice-text').innerText = advice;
            
            const analyticsBody = document.getElementById('reading-analytics-body');
            let groups = {
                "True - False - Not Given": [1,2,3,4,5,6,7],
                "Gap Filling": [8,9,10,11,12,13,24,25,26,27,28,29,30,31,32],
                "Matching Information": [14,15,16,17,18,19],
                "Yes - No - Not Given": [20,21,22,23,33,34,35,36],
                "Multiple Choice": [37,38,39,40]
            };
            
            let tableHtml = '';
            for (const [type, qList] of Object.entries(groups)) {
                let gC = 0, gI = 0, gS = 0;
                qList.forEach(q => {
                    if(resultsMap[q] === "C") gC++;
                    else if(resultsMap[q] === "I") gI++;
                    else gS++;
                });
                
                tableHtml += `
                    <tr class="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition">
                        <td class="py-3 px-6 font-bold text-gray-800 dark:text-gray-200">${type}</td>
                        <td class="py-3 px-6 text-center font-bold">${qList.length}</td>
                        <td class="py-3 px-6 text-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/10">${gC}</td>
                        <td class="py-3 px-6 text-center text-rose-500 font-bold">${gI}</td>
                        <td class="py-3 px-6 text-center text-gray-400">${gS}</td>
                    </tr>
                `;
            }
            if (analyticsBody) analyticsBody.innerHTML = tableHtml;

            window.tempReadingResultsMap = resultsMap;

            if (typeof window.submitTestResult === 'function') {
                window.submitTestResult(currentIeltsReadingTestName, parseFloat(bandScore));
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.showReadingExplanations = function() {
            document.getElementById('ielts-reading-result-dashboard').classList.add('hidden');
            document.getElementById('ielts-reading-explanation-area').classList.remove('hidden');
            
            let passageContainer = document.getElementById('exp-passage-container');
            let expContainer = document.getElementById('reading-explanation-content');
            
            let combinedPassage = "";
            for(let p=1; p<=3; p++) {
                let pText = ieltsReadingData[p].content;
                for(let i=1; i<=40; i++) {
                    if(ieltsReadingExplanations[i] && ieltsReadingExplanations[i].length > 10) {
                        let toReplace = ieltsReadingExplanations[i];
                        if(pText.includes(toReplace)) {
                            pText = pText.replace(toReplace, `<span class="bg-yellow-200 dark:bg-yellow-700/50 px-1 rounded font-bold" id="exp-mark-${i}"><span class="bg-black text-white text-xs px-1 rounded mr-1">${i}</span>${toReplace}</span>`);
                        }
                    }
                }
                combinedPassage += `<h3 class="text-2xl font-black text-cyan-800 dark:text-cyan-300 mt-8 mb-4 border-b pb-2">Passage ${p}</h3>` + pText;
            }
            passageContainer.innerHTML = combinedPassage;

            let expHtml = `<h3 class="text-xl font-bold mb-6 text-gray-800 dark:text-white sticky top-0 bg-white dark:bg-darkCard z-10 py-2">Chi tiết đáp án</h3><div class="space-y-4">`;
            for(let i=1; i<=40; i++) {
                let status = window.tempReadingResultsMap[i];
                let uAns = window[`userAnsRead${i}`] || "(Trống)";
                let cAns = String(ieltsReadingAnswers[i]);
                
                let boxClass = status === "C" ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/10" 
                             : status === "I" ? "border-rose-300 bg-rose-50 dark:bg-rose-900/10" 
                             : "border-gray-300 bg-gray-50 dark:bg-slate-800";
                
                let icon = status === "C" ? "✅" : status === "I" ? "❌" : "➖";
                let expl = ieltsReadingExplanations[i] || "Thông tin dựa trên tổng quan đoạn văn.";

                expHtml += `
                    <div class="p-4 rounded-xl border-2 ${boxClass} transition cursor-pointer hover:shadow-md" onclick="document.getElementById('exp-mark-${i}').scrollIntoView({behavior: 'smooth', block: 'center'})">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-black text-lg">Câu ${i} ${icon}</span>
                            <span class="text-sm font-bold bg-white dark:bg-slate-700 px-2 py-1 rounded shadow-sm border border-gray-200 dark:border-slate-600">Đáp án: ${cAns}</span>
                        </div>
                        <p class="text-sm mb-2 opacity-80 font-semibold">Bạn chọn: <span class="${status === 'C' ? 'text-emerald-600' : 'text-rose-600'}">${uAns}</span></p>
                        <div class="text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-darkCard p-3 rounded border border-gray-200 dark:border-slate-700">
                            <p class="font-bold text-cyan-600 dark:text-cyan-400 mb-1">🔍 Transcript Highlight:</p>
                            <p class="italic">"...<span class="bg-yellow-200 dark:bg-yellow-700/50 px-1 rounded text-black dark:text-white font-medium">${expl}</span>..."</p>
                        </div>
                    </div>
                `;
            }
            expHtml += `</div>`;
            expContainer.innerHTML = expHtml;
        }

       // Hàm thoát khỏi phòng thi Reading và quay lại màn hình danh sách
        window.exitToIeltsDashboard = function() {
            isTakingExam = false;

            window.history.pushState({ pageId: 'ielts', tabId: 'reading' }, "", "#ielts/reading");

            // [SỬA LỖI THÊM VÀO ĐÂY] - Phục hồi Menu chính và vị trí topHeader
            const mainHeader = document.getElementById('main-header');
            if (mainHeader) mainHeader.classList.remove('hidden');
            const topHeader = document.querySelector('#ielts-reading-exam-room > div.fixed');
            if (topHeader) {
                topHeader.classList.remove('top-4');
                topHeader.classList.add('top-[75px]', 'md:top-[88px]');
            }
            
            // 1. Ẩn các khu vực liên quan đến làm bài và kết quả Reading
            document.getElementById('ielts-reading-exam-room').classList.add('hidden');
            document.getElementById('ielts-reading-result-dashboard').classList.add('hidden');
            document.getElementById('ielts-reading-explanation-area').classList.add('hidden');
            
            // 2. Sửa lỗi: Xóa sạch nội dung cũ trong các container chính xác để giải phóng bộ nhớ
            const passageContainer = document.getElementById('reading-passage-container');
            const questionsContainer = document.getElementById('reading-questions-container');
            
            if (passageContainer) passageContainer.innerHTML = '';
            if (questionsContainer) questionsContainer.innerHTML = '';
            
            // 3. Hiển thị lại Layout chia đôi (chuẩn bị cho lần thi sau) và hiện Dashboard IELTS
            const splitLayout = document.querySelector('.reading-split-layout');
            if (splitLayout) splitLayout.classList.remove('hidden');
            
            document.getElementById('ielts-dashboard').classList.remove('hidden');
            
            // 4. Cuộn trang lên trên cùng cho mượt mà
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.retakeIeltsReadingExam = function() {
            startIeltsReadingExam(currentIeltsReadingTestName, false);
        }// ------------------ LOGIC VẼ LỊCH HỌC TẬP (STREAK CALENDAR) ------------------

window.renderStreakCalendar = function(activeDates = new Set()) {
    const container = document.getElementById('streak-calendar-container');
    if (!container) return;

    // Lấy thông tin ngày tháng năm hiện tại
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // Lưu ý: Tháng trong JS bắt đầu từ 0 (0 = Tháng 1)

    // Xác định ngày đầu tiên của tháng là thứ mấy (0 = Chủ Nhật, 1 = Thứ 2,...)
    const firstDayIndex = new Date(year, month, 1).getDay(); 
    // Số ngày trong tháng hiện tại
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Điều chỉnh để Thứ 2 là cột đầu tiên (T2, T3, T4, T5, T6, T7, CN)
    let startDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    // Định dạng chuỗi tháng (ví dụ: 08)
    const monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const currentMonthStr = monthNames[month];

    // Xây dựng khung HTML cho bộ lịch
    let html = `
        <div class="flex justify-between items-center mb-6">
            <h4 class="font-extrabold text-lg text-gray-800 dark:text-gray-200">Tháng ${currentMonthStr} / ${year}</h4>
            <div class="flex items-center gap-2 text-xs font-bold text-gray-500">
                <span class="w-3 h-3 rounded-full bg-[#22c55e] inline-block shadow-sm"></span> Có nộp bài
            </div>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
            <div>T2</div><div>T3</div><div>T4</div><div>T5</div><div>T6</div><div>T7</div><div>CN</div>
        </div>
        <div class="grid grid-cols-7 gap-y-3 text-center text-sm font-semibold">
    `;

    // Tạo các ô trống cho những ngày của tháng trước nằm ở tuần đầu tiên
    for (let i = 0; i < startDay; i++) {
        html += `<div></div>`;
    }

    // Vòng lặp tạo các ô cho từng ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
        // Tạo chuỗi ngày định dạng DD/MM/YYYY để so sánh với cơ sở dữ liệu Firebase
        const dateStr = `${day.toString().padStart(2, '0')}/${currentMonthStr}/${year}`;
        
        // Kiểm tra xem ngày này học viên có nộp bài không
        const isCompleted = activeDates.has(dateStr);
        // Kiểm tra xem ngày này có phải là hôm nay không
        const isToday = (day === today.getDate());

        // Lớp CSS mặc định cho một ô ngày
        let classes = "w-9 h-9 mx-auto flex items-center justify-center rounded-full transition-all duration-300 ";
        
        if (isCompleted) {
            // NẾU CÓ NỘP BÀI: Đổ nền xanh lá, chữ trắng (Giống hình ảnh bạn cung cấp)
            classes += "bg-[#16a34a] text-white font-black shadow-md transform hover:scale-110 cursor-pointer";
        } else if (isToday) {
            // NẾU LÀ HÔM NAY (nhưng chưa nộp bài): Đóng khung đỏ nhạt để nhận diện
            classes += "text-rose-500 font-bold border-2 border-rose-300 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-700";
        } else {
            // CÁC NGÀY BÌNH THƯỜNG: Chữ xám, khi trỏ chuột vào hiện nền xám nhạt
            classes += "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-default";
        }

        html += `
            <div class="py-1">
                <div class="${classes}" title="${isCompleted ? 'Bạn đã hoàn thành bài thi ngày này!' : dateStr}">
                    ${day}
                </div>
            </div>
        `;
    }

    html += `</div>`;
    
    // Đổ mã HTML vừa tạo vào giao diện
    container.innerHTML = html;
}

// Gọi hàm ngay lập tức khi tải trang để hiển thị lịch trống ban đầu (khi chưa đăng nhập)
window.renderStreakCalendar();

// ==========================================
        // LOGIC FLASHCARD TỪ VỰNG
        // ==========================================
        
        // 1. Cơ sở dữ liệu từ vựng 
// Lấy dữ liệu từ localStorage, nếu chưa có thì dùng mảng rỗng []
let vocabDatabase = JSON.parse(localStorage.getItem('myVocabDatabase')) || [];

// Hàm này giúp lưu mảng hiện tại vào localStorage
function saveVocabToStorage() {
    localStorage.setItem('myVocabDatabase', JSON.stringify(vocabDatabase));
}

// Hàm này giúp cập nhật lại các con số thống kê trên giao diện
function updateVocabUI() {
    const totalEl = document.getElementById('vocab-total');
    const reviewEl = document.getElementById('vocab-review');
    if (totalEl) totalEl.innerText = vocabDatabase.length;
    if (reviewEl) reviewEl.innerText = vocabDatabase.length - learnedCount;
}

// Gọi hàm cập nhật giao diện ngay khi trang vừa tải xong
document.addEventListener('DOMContentLoaded', () => {
    updateVocabUI();
});
        // BỘ DỮ LIỆU TỪ VỰNG: WORK AND CAREER (B1-B2)
        const workCareerVocab = [
            { word: "apply for a job", type: "phrase", phonetic: "/.../", meaning: "Nộp đơn xin việc", example: "I decided to apply for a job at the new tech company.<br><br><i>Đồng nghĩa: seek a job, put in an application</i>" },
            { word: "attend an interview", type: "phrase", phonetic: "/.../", meaning: "Tham dự phỏng vấn", example: "She is preparing to attend an interview tomorrow.<br><br><i>Đồng nghĩa: go for an interview</i>" },
            { word: "career path", type: "noun", phonetic: "/.../", meaning: "Con đường sự nghiệp", example: "Teaching is a very rewarding career path.<br><br><i>Đồng nghĩa: career trajectory, professional progression</i>" },
            { word: "climb the career ladder", type: "phrase", phonetic: "/.../", meaning: "Thăng tiến nghề nghiệp", example: "He works hard to climb the career ladder.<br><br><i>Đồng nghĩa: advance professionally, move up</i>" },
            { word: "colleague", type: "noun", phonetic: "/ˈkɒliːɡ/", meaning: "Đồng nghiệp", example: "My colleagues are very supportive and friendly.<br><br><i>Đồng nghĩa: co-worker, associate</i>" },
            { word: "competitive salary", type: "noun", phonetic: "/.../", meaning: "Mức lương cạnh tranh", example: "The company offers a competitive salary for this role.<br><br><i>Đồng nghĩa: attractive pay, good remuneration</i>" },
            { word: "dead-end job", type: "noun", phonetic: "/.../", meaning: "Công việc không có tương lai", example: "I quit because it was a dead-end job.<br><br><i>Đồng nghĩa: unpromising job, job with no prospects</i>" },
            { word: "earn a living", type: "phrase", phonetic: "/.../", meaning: "Kiếm sống", example: "He earns a living by writing freelance articles.<br><br><i>Đồng nghĩa: make money, make a living</i>" },
            { word: "flexible working hours", type: "noun", phonetic: "/.../", meaning: "Giờ làm việc linh hoạt", example: "Parents often prefer flexible working hours.<br><br><i>Đồng nghĩa: flextime, adaptable schedule</i>" },
            { word: "freelance work", type: "noun", phonetic: "/.../", meaning: "Công việc tự do", example: "Freelance work gives me more freedom to travel.<br><br><i>Đồng nghĩa: independent work, contract work</i>" },
            { word: "full-time job", type: "noun", phonetic: "/.../", meaning: "Công việc toàn thời gian", example: "Finding a full-time job can be challenging.<br><br><i>Đồng nghĩa: permanent job, regular employment</i>" },
            { word: "gain experience", type: "phrase", phonetic: "/.../", meaning: "Lấy kinh nghiệm", example: "Volunteering is a great way to gain experience.<br><br><i>Đồng nghĩa: acquire experience, get experience</i>" },
            { word: "heavy workload", type: "noun", phonetic: "/.../", meaning: "Khối lượng công việc lớn", example: "I am stressed because of a heavy workload.<br><br><i>Đồng nghĩa: lot of work, demanding schedule</i>" },
            { word: "hire new staff", type: "phrase", phonetic: "/.../", meaning: "Thuê nhân viên mới", example: "We need to hire new staff for the upcoming project.<br><br><i>Đồng nghĩa: recruit, employ</i>" },
            { word: "job satisfaction", type: "noun", phonetic: "/.../", meaning: "Sự hài lòng với công việc", example: "Job satisfaction is more important than money for me.<br><br><i>Đồng nghĩa: work fulfillment, content at work</i>" },
            { word: "job security", type: "noun", phonetic: "/.../", meaning: "Sự đảm bảo việc làm", example: "Government jobs usually offer great job security.<br><br><i>Đồng nghĩa: employment stability</i>" },
            { word: "minimum wage", type: "noun", phonetic: "/.../", meaning: "Mức lương tối thiểu", example: "The government plans to increase the minimum wage.<br><br><i>Đồng nghĩa: lowest pay, base rate</i>" },
            { word: "part-time job", type: "noun", phonetic: "/.../", meaning: "Việc làm bán thời gian", example: "Students often take a part-time job to pay for tuition.<br><br><i>Đồng nghĩa: half-time job, casual work</i>" },
            { word: "pay rise", type: "noun", phonetic: "/.../", meaning: "Tăng lương", example: "She asked her boss for a pay rise after a successful year.<br><br><i>Đồng nghĩa: salary increase, wage hike</i>" },
            { word: "pension scheme", type: "noun", phonetic: "/.../", meaning: "Chế độ lương hưu", example: "The company offers a good pension scheme for its employees.<br><br><i>Đồng nghĩa: retirement plan, pension fund</i>" },
            { word: "probation period", type: "noun", phonetic: "/.../", meaning: "Thời gian thử việc", example: "You will have a two-month probation period.<br><br><i>Đồng nghĩa: trial period</i>" },
            { word: "promoted (get promoted)", type: "phrase", phonetic: "/.../", meaning: "Được thăng chức", example: "If you work hard, you might get promoted.<br><br><i>Đồng nghĩa: advance, move up</i>" },
            { word: "quit a job", type: "phrase", phonetic: "/.../", meaning: "Nghỉ việc", example: "He decided to quit a job that made him unhappy.<br><br><i>Đồng nghĩa: resign, leave a job</i>" },
            { word: "recruitment agency", type: "noun", phonetic: "/.../", meaning: "Công ty tuyển dụng", example: "We hired a recruitment agency to find good candidates.<br><br><i>Đồng nghĩa: employment agency, staffing firm</i>" },
            { word: "resign from a job", type: "phrase", phonetic: "/.../", meaning: "Từ chức", example: "The manager resigned from his job due to health issues.<br><br><i>Đồng nghĩa: step down, quit</i>" },
            { word: "retire early", type: "phrase", phonetic: "/.../", meaning: "Nghỉ hưu sớm", example: "They saved enough money to retire early.<br><br><i>Đồng nghĩa: stop working early</i>" },
            { word: "run a business", type: "phrase", phonetic: "/.../", meaning: "Điều hành doanh nghiệp", example: "It takes a lot of effort to run a business.<br><br><i>Đồng nghĩa: manage a company, operate a business</i>" },
            { word: "shift work", type: "noun", phonetic: "/.../", meaning: "Làm việc theo ca", example: "Nurses often have to do shift work.<br><br><i>Đồng nghĩa: working in shifts</i>" },
            { word: "sick leave", type: "noun", phonetic: "/.../", meaning: "Nghỉ ốm", example: "He is on sick leave because of a bad cold.<br><br><i>Đồng nghĩa: medical leave, time off sick</i>" },
            { word: "take time off", type: "phrase", phonetic: "/.../", meaning: "Xin nghỉ phép", example: "I need to take time off to deal with personal matters.<br><br><i>Đồng nghĩa: go on leave, take a break</i>" },
            { word: "teamwork skills", type: "noun", phonetic: "/.../", meaning: "Kỹ năng làm việc nhóm", example: "Good teamwork skills are essential in this office.<br><br><i>Đồng nghĩa: collaborative skills</i>" },
            { word: "temporary job", type: "noun", phonetic: "/.../", meaning: "Công việc tạm thời", example: "I found a temporary job for the summer.<br><br><i>Đồng nghĩa: short-term job, interim job</i>" },
            { word: "unemployed", type: "adjective", phonetic: "/.../", meaning: "Thất nghiệp", example: "He has been unemployed for six months.<br><br><i>Đồng nghĩa: jobless, out of work</i>" },
            { word: "work environment", type: "noun", phonetic: "/.../", meaning: "Môi trường làm việc", example: "A positive work environment increases productivity.<br><br><i>Đồng nghĩa: workplace atmosphere</i>" },
            { word: "work under pressure", type: "phrase", phonetic: "/.../", meaning: "Làm việc dưới áp lực", example: "You need the ability to work under pressure.<br><br><i>Đồng nghĩa: handle stress</i>" },
            { word: "workaholic", type: "noun", phonetic: "/.../", meaning: "Người nghiện công việc", example: "My boss is a workaholic who never takes a break.<br><br><i>Đồng nghĩa: work-obsessed, overworker</i>" },
            { word: "working conditions", type: "noun", phonetic: "/.../", meaning: "Điều kiện làm việc", example: "The factory improved its working conditions recently.<br><br><i>Đồng nghĩa: workplace setup</i>" },
            { word: "work-life balance", type: "noun", phonetic: "/.../", meaning: "Cân bằng công việc - cuộc sống", example: "It's important to maintain a healthy work-life balance.<br><br><i>Đồng nghĩa: lifestyle balance</i>" },
            { word: "accept an offer", type: "phrase", phonetic: "/.../", meaning: "Chấp nhận lời đề nghị", example: "I was thrilled to accept their job offer.<br><br><i>Đồng nghĩa: agree to an offer, take a job</i>" },
            { word: "background check", type: "noun", phonetic: "/.../", meaning: "Kiểm tra lý lịch", example: "The HR department will run a background check.<br><br><i>Đồng nghĩa: vetting, screening</i>" },
            { word: "bonus", type: "noun", phonetic: "/ˈbəʊnəs/", meaning: "Tiền thưởng", example: "We received a generous Christmas bonus this year.<br><br><i>Đồng nghĩa: extra pay, reward</i>" },
            { word: "dismiss an employee", type: "phrase", phonetic: "/.../", meaning: "Sa thải nhân viên", example: "The company had to dismiss an employee for stealing.<br><br><i>Đồng nghĩa: fire, terminate</i>" },
            { word: "employability", type: "noun", phonetic: "/.../", meaning: "Khả năng được tuyển dụng", example: "Learning a new language boosts your employability.<br><br><i>Đồng nghĩa: job prospects</i>" },
            { word: "hands-on experience", type: "noun", phonetic: "/.../", meaning: "Kinh nghiệm thực tế", example: "The course provides hands-on experience in coding.<br><br><i>Đồng nghĩa: practical experience</i>" },
            { word: "job hunting", type: "noun", phonetic: "/.../", meaning: "Việc tìm kiếm việc làm", example: "Job hunting can be a frustrating process.<br><br><i>Đồng nghĩa: job seeking, looking for work</i>" },
            { word: "lay off staff", type: "phrase", phonetic: "/.../", meaning: "Sa thải nhân viên (do dư thừa)", example: "The factory had to lay off staff due to low sales.<br><br><i>Đồng nghĩa: make redundant</i>" },
            { word: "maternity leave", type: "noun", phonetic: "/.../", meaning: "Nghỉ thai sản", example: "She is currently on maternity leave.<br><br><i>Đồng nghĩa: parental leave</i>" },
            { word: "meet a deadline", type: "phrase", phonetic: "/.../", meaning: "Hoàn thành đúng hạn", example: "We had to work late to meet a deadline.<br><br><i>Đồng nghĩa: finish on time</i>" },
            { word: "professional development", type: "noun", phonetic: "/.../", meaning: "Phát triển chuyên môn", example: "The school invests in teachers' professional development.<br><br><i>Đồng nghĩa: career growth</i>" },
            { word: "take over a role", type: "phrase", phonetic: "/.../", meaning: "Đảm nhận vị trí", example: "She will take over the role of manager next month.<br><br><i>Đồng nghĩa: assume a position</i>" }
        ];

        let currentCardIndex = 0;
        let learnedCount = 0;

        // LOGIC MỚI: ĐÓNG / MỞ VÀ LƯU TỪ VỰNG THỦ CÔNG
        window.openAddVocabModal = function() {
            const modal = document.getElementById('add-vocab-modal');
            const content = document.getElementById('add-vocab-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
            document.getElementById('manual-word').focus(); // Tự động đưa con trỏ vào ô nhập
        };

        window.closeAddVocabModal = function() {
            const modal = document.getElementById('add-vocab-modal');
            const content = document.getElementById('add-vocab-content');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        };

        window.saveManualVocab = function() {
            const wordInput = document.getElementById('manual-word').value.trim();
            const typeInput = document.getElementById('manual-type').value.trim();
            const meaningInput = document.getElementById('manual-meaning').value.trim();

            if (!wordInput || !meaningInput) {
                showToast("Vui lòng nhập đầy đủ Từ vựng và Định nghĩa!", "warning");
                return;
            }

            // Kiểm tra xem từ đã tồn tại chưa
            const isExist = vocabDatabase.find(item => item.word.toLowerCase() === wordInput.toLowerCase());
            if (isExist) {
                showToast(`Từ "${wordInput}" đã có trong danh sách!`, "warning");
                return;
            }

            // Đẩy từ mới vào mảng
            vocabDatabase.push({
                word: wordInput.toLowerCase(),
                type: typeInput || "vocabulary",
                phonetic: "/.../",
                meaning: meaningInput,
                example: "Nguồn: Tự thêm thủ công"
            });
            // THÊM 2 DÒNG NÀY VÀO ĐÂY
            saveVocabToStorage();
            updateVocabUI();

            showToast("Đã lưu từ mới thành công!", "success");
            
            // Xóa rỗng các ô nhập liệu sau khi lưu
            document.getElementById('manual-word').value = '';
            document.getElementById('manual-type').value = '';
            document.getElementById('manual-meaning').value = '';

            closeAddVocabModal(); // Tự động đóng Popup
        };

       // 2. Hàm bắt đầu học (Nhận tham số để biết học bộ nào)
        window.startFlashcard = function(deckType = 'personal') {
            document.getElementById('vocab-dashboard').classList.add('hidden');
            document.getElementById('vocab-study-room').classList.remove('hidden');
            
            // Chuyển đổi cơ sở dữ liệu dựa trên nút người dùng bấm
            if (deckType === 'work_career') {
                currentLearningDB = workCareerVocab;
            } else {
                currentLearningDB = vocabDatabase; // Mặc định là bộ từ cá nhân
            }

            if(currentLearningDB.length === 0) {
                showToast("Bộ từ vựng này hiện chưa có từ nào!", "warning");
                exitFlashcard();
                return;
            }

            currentCardIndex = 0;
            learnedCount = 0;
            loadCardData(currentCardIndex);
        };

        // 3. Hàm thoát ra ngoài
        window.exitFlashcard = function() {
            document.getElementById('vocab-study-room').classList.add('hidden');
            document.getElementById('vocab-dashboard').classList.remove('hidden');
            // Cập nhật lại số liệu thống kê
            document.getElementById('vocab-learned').innerText = learnedCount;
            document.getElementById('vocab-review').innerText = vocabDatabase.length - learnedCount;
        };

// 4. Hàm nạp dữ liệu từ vựng lên thẻ
        function loadCardData(index) {
            const data = currentLearningDB[index]; // Sử dụng mảng đang được trỏ tới
            document.getElementById('fc-word').innerText = data.word;
            document.getElementById('fc-type').innerText = data.type;
            document.getElementById('fc-phonetic').innerText = data.phonetic;
            document.getElementById('fc-meaning').innerText = data.meaning;
            document.getElementById('fc-example').innerHTML = data.example; // Dùng innerHTML để in đậm/in nghiêng từ đồng nghĩa
            
            // Cập nhật tiến trình (VD: 1 / 50)
            document.getElementById('flashcard-progress').innerText = `${index + 1} / ${currentLearningDB.length}`;
            
            const container = document.querySelector('.flashcard-container');
            container.classList.remove('flipped');
        }

        // 5. Hàm Lật Thẻ
        window.toggleFlashcard = function() {
            const container = document.querySelector('.flashcard-container');
            container.classList.toggle('flipped');
        };

       // 6. Hàm chuyển sang thẻ tiếp theo khi bấm nút Đánh giá
        window.nextCard = function(rating) {
            const container = document.querySelector('.flashcard-container');
            container.classList.remove('flipped');

            if(rating !== 'hard') learnedCount++;

            setTimeout(() => {
                currentCardIndex++;
                // So sánh với độ dài của mảng đang học
                if (currentCardIndex < currentLearningDB.length) {
                    loadCardData(currentCardIndex);
                } else {
                    showToast("🎉 Chúc mừng! Bạn đã hoàn thành danh sách ôn tập này.");
                    exitFlashcard(); 
                }
            }, 300);
        };

        // 7. Hàm Đọc phát âm (Web Speech API)
        window.playAudio = function(event, text) {
            event.stopPropagation(); // Ngăn việc click nút loa làm lật thẻ
            
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US'; // Giọng Mỹ
                utterance.rate = 0.9; // Đọc chậm lại một chút cho dễ nghe
                window.speechSynthesis.speak(utterance);
            } else {
                showToast("Trình duyệt của bạn không hỗ trợ đọc âm thanh.", "error");
            }
        };
        
        // Cập nhật số liệu ban đầu
        document.getElementById('vocab-total').innerText = vocabDatabase.length;
        document.getElementById('vocab-review').innerText = vocabDatabase.length;

        // ==========================================
        // LOGIC POPUP THÔNG BÁO TRANG CHỦ
        // ==========================================
        
        // 1. Hàm gọi Popup trượt ra
        window.showNotificationPopup = function() {
            const popup = document.getElementById('home-notification-popup');
            if (popup) {
                // Cập nhật ngày tháng hiện tại cho thông báo
                const today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
                const yyyy = today.getFullYear();
                document.getElementById('popup-date-display').innerText = `${dd}/${mm}/${yyyy}`;

                // Tạo độ trễ 1 giây (1000ms) trước khi trượt ra để tạo cảm giác tự nhiên
                setTimeout(() => {
                    popup.classList.remove('translate-x-[120%]');
                    popup.classList.add('translate-x-0');
                }, 1000);
            }
        };

        // 2. Hàm đóng Popup (trượt vào lại)
        window.closeNotificationPopup = function() {
            const popup = document.getElementById('home-notification-popup');
            if (popup) {
                popup.classList.remove('translate-x-0');
                popup.classList.add('translate-x-[120%]');
            }
        };

       // ==========================================
        // MỚI: XỬ LÝ URL, NÚT BACK/FORWARD VÀ RELOAD
        // ==========================================
        
        // 1. Bắt sự kiện khi người dùng bấm nút Quay lại (Back) hoặc Tiến (Forward) trên trình duyệt
        window.addEventListener('popstate', function(event) {
            if (event.state && event.state.pageId) {
                // Nếu người dùng bấm Back/Forward quay lại đúng một phòng thi, tải lại trang để làm mới bộ đếm giờ
                if (event.state.pageId === 'exam') {
                    window.location.reload();
                } else {
                    showPage(event.state.pageId, event.state.tabId || 'listening', false);
                }
            } else {
                showPage('home', null, false);
            }
        });

        // 2. Xử lý khi tải trang (Đọc URL hiện tại để mở đúng Tab nếu có chia sẻ link hoặc bấm F5)
        window.addEventListener('DOMContentLoaded', (event) => {
            showNotificationPopup(); // Hiện popup thông báo

            if (window.location.hash) {
                const hashParts = window.location.hash.replace('#', '').split('/');
                const initialPage = hashParts[0];
                const initialTab = hashParts[1] || 'listening';
                
                // KHI ĐANG Ở PHÒNG THI MÀ TẢI LẠI TRANG HOẶC VÀO TỪ LINK CHIA SẺ
                if (initialPage === 'exam') {
                    const testSlug = hashParts[2] || '';
                    
                    // 1. Chuyển trang nền bên dưới về đúng chuyên mục trước
                    if (initialTab === 'thpt') {
                        showPage('thpt', null, false);
                    } else {
                        showPage('ielts', initialTab, false);
                    }

                    // 2. Đợi 1 giây để Firebase kịp xác thực đăng nhập, sau đó mở bài thi
                    setTimeout(() => {
                        if (initialTab === 'thpt') {
                            if (testSlug.includes('2')) startThptExam(2);
                            else if (testSlug.includes('3')) startThptExam(3);
                        } else if (initialTab === 'reading') {
                            if (testSlug.includes('cambridge-21')) openModeModal('Cambridge 21 - Reading Test 4');
                        } else if (initialTab === 'listening') {
                            if (testSlug.includes('cambridge-21')) openModeModal('Cambridge 21 - Listening Test 4');
                        }
                    }, 1000);

                } else {
                    // Nếu là các trang bình thường (home, vocab,...)
                    showPage(initialPage, initialTab, false);
                }
            } else {
                showPage('home', null, false); 
                window.history.replaceState({ pageId: 'home', tabId: null }, "", "#home");
            }
        });
        
// Khởi tạo các biến toàn cục để lưu trữ dữ liệu ghi âm
let mediaRecorder;
let audioChunks = [];

// Lấy các phần tử từ HTML
// Lấy các phần tử từ HTML
const btnStartRecord = document.getElementById('btn-start-record-speaking'); // Đã thêm -speaking
const btnStopRecord = document.getElementById('btn-stop-record-speaking');
const audioPlayback = document.getElementById('audio-playback');

// ==========================================
// 1. HÀM GỬI FILE CHO AI (Đã tối ưu cho Vercel và UI mới)
// ==========================================
window.sendAudioToAI = async function(audioBlob) {
    // 1. Lấy các phần tử giao diện MỚI
    const feedbackBox = document.getElementById('speaking-ai-text');
    const instructionText = document.getElementById('speaking-instruction');
    const indicator = document.getElementById('recording-indicator');
    const btnSubmit = document.getElementById('btn-submit-answer');
    const extraControls = document.getElementById('extra-controls');
    const questionElement = document.getElementById('current-speaking-question');
    const questionText = questionElement ? questionElement.innerText : "Introduce yourself";

    // 2. Hiển thị trạng thái đang tải trên giao diện mới
    if (instructionText) instructionText.classList.add('hidden');
    if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.innerHTML = '<p class="text-amber-500 font-bold flex items-center justify-center gap-2"><span class="animate-spin">⏳</span> AI đang phân tích giọng nói của bạn, vui lòng đợi...</p>';
    }

    // 3. Xử lý file âm thanh sang Base64
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    
    reader.onloadend = async () => {
        try {
            const base64Audio = reader.result.split(',')[1];
            
            // Gọi API Vercel
            const response = await fetch('/api/grade-speaking.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    audio: base64Audio, 
                    mimeType: 'audio/webm',
                    question: questionText
                })
            });

            if (!response.ok) throw new Error("Lỗi khi kết nối với máy chủ AI!");

            const result = await response.json();

            // Lấy điểm từ AI (Mặc định 0 nếu không có)
            const numericScore = result.score ? parseFloat(result.score) : 0;
            const displayScore = numericScore.toFixed(1);

            // 4. Hiển thị kết quả vào giao diện mới (Giao diện chuẩn giống Writing)
            if (feedbackBox) {
                // Nới rộng khung hiển thị để vừa với thiết kế mới
                feedbackBox.classList.remove('max-w-lg');
                feedbackBox.classList.add('w-full', 'max-w-3xl'); 
                
                feedbackBox.innerHTML = `
                    <div class="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
                        <h3 class="font-extrabold text-xl text-emerald-600 dark:text-emerald-400">Nhận xét</h3>
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-4 mb-6">
                        <div class="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 min-w-[120px] flex flex-col justify-center shadow-sm">
                            <p class="text-sm text-gray-500 dark:text-gray-400 font-bold mb-1">Band Score</p>
                            <p class="text-5xl font-black text-emerald-600 dark:text-emerald-400">${displayScore}</p>
                        </div>
                        <div class="flex-grow p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl text-sm text-gray-700 dark:text-gray-300 italic font-medium flex items-center border border-gray-100 dark:border-slate-600 text-left">
                            Bạn đã hoàn thành bài nói! Hãy xem chi tiết nhận xét bên dưới để rút kinh nghiệm cho lần sau nhé.
                        </div>
                    </div>
                    
                    <div class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm whitespace-pre-wrap text-left">${result.feedback}</div>
                `;
            }
            
            // Hiển thị cụm nút Nghe lại / Hiện câu hỏi
            if (extraControls) extraControls.classList.remove('hidden');

            // 5. LƯU LỊCH SỬ VÀ TÔ XANH STREAK
            const testName = "IELTS Speaking - " + (window.currentSpeakingPart || "Practice");
            if (typeof window.submitTestResult === 'function') {
                window.submitTestResult(testName, numericScore);
            }

        } catch (error) {
            console.error("Lỗi:", error);
            if (feedbackBox) {
                feedbackBox.innerHTML = '<p class="text-rose-500 font-bold">❌ Có lỗi xảy ra trong quá trình chấm điểm. Vui lòng thử lại!</p>';
            }
        } finally {
            // 6. Khôi phục trạng thái nút bấm sau khi AI chạy xong (dù lỗi hay thành công)
            if (indicator) {
                indicator.innerHTML = `<span class="w-3 h-3 rounded-full bg-cyan-500"></span><span class="text-sm font-bold text-gray-500">Sẵn sàng</span>`;
            }
            if (btnSubmit) {
                btnSubmit.disabled = false;
                btnSubmit.innerText = "Tiếp tục";
                btnSubmit.classList.replace('bg-gray-400', 'bg-[#4c00ff]');
            }
        }
    };
};

// ==========================================
// 2. SỰ KIỆN NÚT BẮT ĐẦU THU ÂM
// ==========================================
if (btnStartRecord) {
    btnStartRecord.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = []; 

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
     };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayback.src = audioUrl;

            // Gọi hàm gửi AI ngay khi vừa tạo xong file âm thanh
            sendAudioToAI(audioBlob); 
            
            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();
        
        // Thay đổi trạng thái Giao diện
        btnStartRecord.disabled = true;
        btnStartRecord.classList.replace('text-blue-600', 'text-rose-500');
        btnStartRecord.classList.replace('border-blue-500', 'border-rose-500');
        btnStartRecord.innerText = "ĐANG THU ÂM...";
        
        btnStopRecord.disabled = false;
        btnStopRecord.classList.replace('text-gray-400', 'text-rose-600');
        btnStopRecord.classList.replace('border-gray-300', 'border-rose-500');
        btnStopRecord.classList.remove('cursor-not-allowed');

    } catch (err) {
        alert("Không thể truy cập Micro. Vui lòng kiểm tra lại quyền cấp phép của trình duyệt!");
        console.error("Lỗi Micro: ", err);
      }
  });
}

// ==========================================
// 3. SỰ KIỆN NÚT DỪNG THU ÂM
// ==========================================
if (btnStopRecord) {
    btnStopRecord.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        
        // Trả lại trạng thái Giao diện ban đầu
        btnStartRecord.disabled = false;
        btnStartRecord.classList.replace('text-rose-500', 'text-blue-600');
        btnStartRecord.classList.replace('border-rose-500', 'border-blue-500');
        btnStartRecord.innerText = "THU ÂM LẠI";
        
        btnStopRecord.disabled = true;
        btnStopRecord.classList.replace('text-rose-600', 'text-gray-400');
        btnStopRecord.classList.replace('border-rose-500', 'border-gray-300');
        btnStopRecord.classList.add('cursor-not-allowed');
       }
    });
}
