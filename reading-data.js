/ Biến này sẽ chứa toàn bộ dữ liệu của đề thi Cambridge 21 Reading Test 4
const cambridge21Test4Reading = [
    {
        passageId: 1,
        title: "The problems and benefits created by the spread of the water hyacinth in Kenya",
        // Nội dung bài đọc (có thể sử dụng các thẻ HTML cơ bản như <p>, <br> để ngắt đoạn)
        content: `
            <p>Water hyacinth (Eichhornia crassipes), an aquatic plant native to South America, first appeared in countries in Africa in the early 1900s. Scientists there called it the 'world's worst aquatic weed', after it spread from the southernmost tip of Africa in the early 1900s and started obstructing major dams and rivers.</p>
            <p>In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves and delicate purple flowers floating in their ponds. But by the 1980s, it had 'escaped' out of the country via the Kagera river and made its way downstream to Lake Victoria...</p>
            <!-- Phần nội dung bài đọc sẽ được điền đầy đủ vào đây -->
        `,
        questionGroups: [
            {
                // Nhóm câu hỏi 1-7: True/False/Not Given
                groupId: "Q1_7",
                type: "TRUE_FALSE_NOT_GIVEN",
                instructions: "Do the following statements agree with the information given in Reading Passage 1?",
                questions: [
                    { 
                        id: 1, 
                        text: "Water hyacinth was introduced as a decorative plant in east Africa.", 
                        answer: "TRUE", 
                        explanation: "In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves and delicate purple flowers floating in their ponds." 
                    },
                    { 
                        id: 2, 
                        text: "Fishermen took some water hyacinth plants to Lake Victoria.", 
                        answer: "FALSE", 
                        explanation: "it had 'escaped' out of the country via the Kagera river and made its way downstream to Lake Victoria." 
                    },
                    { 
                        id: 3, 
                        text: "It is now difficult to force boats through the thick water hyacinth on Lake Victoria.", 
                        answer: "TRUE", 
                        explanation: "as the boats that once brought the fish to shore by the hundreds struggle to navigate through the mass of plants." 
                    }
                    // Các câu 4, 5, 6, 7 sẽ được thêm vào tương tự
                ]
            },
            {
                // Nhóm câu hỏi 8-10: Sơ đồ Flow-chart
                groupId: "Q8_10",
                type: "FLOW_CHART",
                instructions: "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                chartTitle: "Generating biogas for domestic use in Dunga",
                // Thiết kế HTML của sơ đồ sẽ được đặt tại đây để giữ nguyên cấu trúc như file PDF
                htmlTemplate: `
                    <div class="flow-chart-container border-2 border-gray-300 p-4 rounded-lg text-center space-y-4">
                        <div class="step bg-white p-3 border rounded shadow-sm">
                            First, place water hyacinth together with some <input type="text" data-qid="8" class="q-input border-b-2 border-cyan-500 w-32 text-center" placeholder="8"> into a digester
                        </div>
                        <div class="arrow text-2xl font-bold">↓</div>
                        <div class="step bg-white p-3 border rounded shadow-sm">
                            Leave the mixture until the <input type="text" data-qid="9" class="q-input border-b-2 border-cyan-500 w-32 text-center" placeholder="9"> is completed
                        </div>
                        <div class="arrow text-2xl font-bold">↓</div>
                        <div class="step bg-white p-3 border rounded shadow-sm">
                            Capture the gas emitted by the digester and use <input type="text" data-qid="10" class="q-input border-b-2 border-cyan-500 w-32 text-center" placeholder="10"> to transport it to individual homes
                        </div>
                    </div>
                `,
                questions: [
                    { id: 8, answer: "cow dung", explanation: "The community received a pair of donated biogas digesters - machines that would transform a mix of water hyacinth and cow dung into biogas for cooking" },
                    { id: 9, answer: "fermentation", explanation: "The mixture goes in one end - think of it as a mouth and over the next 20 to 30 days, it goes through a fermentation process and breaks down, giving off gas that comes out the other end" },
                    { id: 10, answer: "pipes", explanation: "From there, the clean-burning gas is passed through pipes to the point of use, just like traditional domestic gas" }
                ]
            }
        ]
    }
    // Passage 2 và Passage 3 sẽ được nối tiếp vào đây dưới dạng các Object {}
];
