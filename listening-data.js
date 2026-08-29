// 1. TẠO KHO DỮ LIỆU ĐỘNG CHO TỪNG BÀI THI
        const ieltsListeningDatabase = {
            "Cambridge 21 - Listening Test 4": {
                answers: {
                    1: "10", 2: "weather", 3: "safety", 4: "discount", 5: "dictionary",
                    6: "certificate", 7: "towel", 8: "cafe", 9: "videos", 10: "lockers",
                    11: "A", 12: "B", 13: "A", 14: "A", 15: "A", 16: "C", 17: "C", 18: "A", 19: "B", 20: "C",
                    21: ["B", "D"], 22: ["B", "D"], 23: ["C", "E"], 24: ["C", "E"],
                    25: "G", 26: "B", 27: "F", 28: "H", 29: "A", 30: "E",
                    31: "metal", 32: "slow", 33: "demand", 34: "equator", 35: "recycle", 
                    36: "fungus", 37: "weather", 38: "strong", 39: "roots", 40: "soil"
                },
                audio: {
                    1: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-1.mp3",
                    2: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-2.mp3",
                    3: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-3.mp3",
                    4: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-4.mp3"
            },
             content: {
                    1: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 1: Questions 1-10</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the form below. Write ONE WORD ONLY for each answer.</p>
                            <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                                <h5 class="text-center font-bold text-lg mb-6 dark:text-white">Survey about shopping in Broadbeach</h5>
                                <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                    <p class="flex items-center gap-2">Name: Martyn <input type="text" id="ielts-ans-1" class="border-b-2 border-gray-400 dark:border-gray-500 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(1)"></p>
                                    <h6 class="font-bold mt-4 underline">Today's journey to Broadbeach</h6>
                                    <p class="flex items-center gap-2">used his <input type="text" id="ielts-ans-2" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(2)"></p>
                                    <h6 class="font-bold mt-4 underline">Purpose of today's trip:</h6>
                                    <p class="flex items-center gap-2">has visited the <input type="text" id="ielts-ans-3" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(3)"></p>
                                    <p class="flex items-center gap-2">looking for a new <input type="text" id="ielts-ans-4" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(4)"></p>
                                    <p class="flex items-center gap-2">collecting <input type="text" id="ielts-ans-5" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(5)"> (after repair)</p>
                                    <h6 class="font-bold mt-4 underline">Preferred day for shopping:</h6>
                                    <p class="flex items-center gap-2"><input type="text" id="ielts-ans-6" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(6)"></p>
                                    <h6 class="font-bold mt-4 underline">Opinions about shopping in the town centre</h6>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li>Finds the service in shops is excellent</li>
                                        <li>Thinks there are too many places selling <input type="text" id="ielts-ans-7" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(7)"></li>
                                        <li>Would like more places to buy <input type="text" id="ielts-ans-8" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(8)"></li>
                                    </ul>
                                    <h6 class="font-bold mt-4 underline">Opinions about new out-of-town Shopping Centre</h6>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li>Likes the <input type="text" id="ielts-ans-9" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(9)"> best</li>
                                        <li>Believes the <input type="text" id="ielts-ans-10" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(10)"> is unnecessary</li>
                                    </ul>
                                </div>
                            </div>
                    `,
                    2: `
                            <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 2: Questions 11-20</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 11-12: Choose TWO letters, A-E.</p>
                            <p class="mb-2 dark:text-white">In which TWO areas of the business exhibition did James Craig promote his company last year?</p>
                            <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-11-12">
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. the Digital Marketing Centre</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. the TalkCon Zone</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. the Breakout area</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. the Business Village</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. the Business Connections Zone</label>
                            </div>
                            
                            <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 13-14: Choose TWO letters, A-E.</p>
                            <p class="mb-2 dark:text-white">Which TWO facts are given about discounts on popular brands available to exhibitors?</p>
                            <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-13-14">
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. They are available to all members of exhibiting companies.</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. They can be used for both food and clothing.</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. They only apply if people spend at least £400.</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. They can be used by family members.</label>
                                <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. The percentage saved is always the same.</label>
                            </div>

                            <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 15-20: Which topic will each of the following speakers focus on?</p>
                            <p class="text-gray-500 italic mb-4">Choose SIX answers from the box and write the correct letter, A-G.</p>
                            <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner">
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm dark:text-gray-200">
                                    <li><strong>A.</strong> Supporting job seekers</li><li><strong>B.</strong> Dealing with personal problems</li>
                                    <li><strong>C.</strong> Effects of an unexpectedly rapid expansion</li><li><strong>D.</strong> A global range of business experiences</li>
                                    <li><strong>E.</strong> Coping with financial set-backs</li><li><strong>F.</strong> Developing a company in response to changing markets</li>
                                    <li><strong>G.</strong> Combining business success with contributions to charities</li>
                                </ul>
                            </div>
                            <div class="space-y-3 dark:text-white">
                                <p>15. Jim Clowrie <input type="text" id="ielts-ans-15" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>16. David France <input type="text" id="ielts-ans-16" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>17. Oliver Stanton <input type="text" id="ielts-ans-17" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>18. Francesca Heptonstall <input type="text" id="ielts-ans-18" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>19. Salman Khan <input type="text" id="ielts-ans-19" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>20. Annie Craven <input type="text" id="ielts-ans-20" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            </div>
                    `,
                    3: `
                            <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 3: Questions 21-30</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Questions 21-23: Choose the correct letter, A, B or C.</p>
                            <div class="space-y-6 mb-8 dark:text-white">
                                <div id="q21-container">
                                    <p class="font-semibold mb-2" id="q21-text">21. Which aspect of their presentation are Mia and Leo both concerned about?</p>
                                    <div class="ml-4 space-y-1" id="ielts-rad-21">
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q21" value="A"> A. meeting the deadline</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q21" value="B"> B. finding suitable examples</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q21" value="C"> C. including original ideas</label>
                                    </div>
                                </div>
                                <div id="q22-container">
                                    <p class="font-semibold mb-2" id="q22-text">22. The students decide to focus their assignment on housing for</p>
                                    <div class="ml-4 space-y-1" id="ielts-rad-22">
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q22" value="A"> A. family groups.</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q22" value="B"> B. old people.</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q22" value="C"> C. single people.</label>
                                    </div>
                                </div>
                                <div id="q23-container">
                                    <p class="font-semibold mb-2" id="q23-text">23. The students agree that demand for accommodation in urban areas should be met by</p>
                                    <div class="ml-4 space-y-1" id="ielts-rad-23">
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q23" value="A"> A. repurposing offices and factories.</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q23" value="B"> B. constructing tall buildings.</label>
                                        <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q23" value="C"> C. developing creative ideas for smaller homes.</label>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 24-30: What opinion is given about each of the following developments?</p>
                            <p class="text-gray-500 italic mb-4">Choose SEVEN answers from the box and write the correct letter, A-I.</p>
                            <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <li><strong>A.</strong> This could cause unnecessary anxiety.</li><li><strong>B.</strong> This would be especially beneficial for city residents.</li>
                                    <li><strong>C.</strong> This would be challenging for young people.</li><li><strong>D.</strong> This would have environmental benefits.</li>
                                    <li><strong>E.</strong> This could encourage creativity.</li><li><strong>F.</strong> This could lead to social problems.</li>
                                    <li><strong>G.</strong> This could enable retired people to share a project.</li><li><strong>H.</strong> This would help some people but cause problems for others.</li>
                                    <li><strong>I.</strong> This would suit both existing and new members of a household.</li>
                                </ul>
                            </div>
                            <div class="space-y-3 dark:text-white">
                                <p>24. use of roof space for gardens <input type="text" id="ielts-ans-24" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>25. shared working spaces <input type="text" id="ielts-ans-25" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>26. moveable internal walls <input type="text" id="ielts-ans-26" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>27. smart mirrors in bathrooms <input type="text" id="ielts-ans-27" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>28. bike sheds with charging points <input type="text" id="ielts-ans-28" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>29. restriction of cars to certain areas <input type="text" id="ielts-ans-29" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                                <p>30. communal vegetable plots <input type="text" id="ielts-ans-30" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            </div>
                    `,
                    4: `
                            <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 4: Questions 31-40</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                            <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                                <h5 class="font-bold text-lg mb-4 dark:text-white">Music therapy for surgical patients</h5>
                                <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                    <h6 class="font-bold mt-4 underline">Background</h6>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li>Surgery impacts patients because they may experience discomfort or unwelcome changes to their <input type="text" id="ielts-ans-31" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(31)">.</li>
                                        <li>Current post-surgical strategies focus mainly on pain relief.</li>
                                    </ul>
                                    <h6 class="font-bold mt-4 underline">Recent research</h6>
                                    <ul class="list-disc pl-5 space-y-3">
                                        <li>A study reviewed data from about 100 <input type="text" id="ielts-ans-32" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(32)"> and found that listening to music
                                            <ul class="list-[circle] pl-6 mt-1"><li>improved hospital patients' sense of wellbeing.</li><li>reduced the length of their stay.</li></ul>
                                        </li>
                                        <li>The patients in the study all listened to music with a <input type="text" id="ielts-ans-33" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(33)"> effect.</li>
                                        <li>The music was mostly played through music <input type="text" id="ielts-ans-34" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(34)">.</li>
                                        <li>Patients reported an absence or low levels of <input type="text" id="ielts-ans-35" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(35)">.</li>
                                        <li>Medical records confirmed that patients who were played music in hospital needed less <input type="text" id="ielts-ans-36" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(36)"> than those who weren't played music.</li>
                                        <li>The best results were achieved when patients were played music while they were <input type="text" id="ielts-ans-37" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(37)">.</li>
                                        <li>The study concluded that playing music was effective because it served as a <input type="text" id="ielts-ans-38" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(38)">.</li>
                                        <li>The researchers recommend playing either music or sounds from <input type="text" id="ielts-ans-39" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(39)"> to all surgical patients.</li>
                                        <li>A future study will investigate the best <input type="text" id="ielts-ans-40" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(40)"> for the music.</li>
                                    </ul>
                                </div>
                            </div>
                    `
                },
// Cập nhật lại thuộc tính transcript với đầy đủ kịch bản và bôi vàng đáp án
                transcript: `
                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 1</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>WOMAN:</strong> Good morning. I'm doing a survey of shoppers in Broadbeach. Would you have a few minutes to spare to answer some questions?</p>
                        <p><strong>MAN:</strong> Oh...erm...yes, I guess that would be ok.</p>
                        <p><strong>WOMAN:</strong> Thank you very much. Everybody seems so busy today.</p>
                        <p><strong>MAN:</strong> Well actually I don't have loads of time, so...</p>
                        <p><strong>WOMAN:</strong> Oh yes, of course. It really won't take long. Could I start by taking your name please?</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q1</span>Martyn Leigh. Martyn's with a Y.</span></p>
                        <p><strong>WOMAN:</strong> And is your family name spelt L-double-E?</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q1</span>It's L-E-I-G-H.</span></p>
                        <p><strong>WOMAN:</strong> Thank you. We don't actually publish your name or details. It just makes it easier for me to identify people when I look at all the results at the end.</p>
                        <p><strong>MAN:</strong> I see.</p>
                        <p><strong>WOMAN:</strong> And can I ask, how did you get into town today?</p>
                        <p><strong>MAN:</strong> Well, normally I catch the bus, but <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q2</span>I'm on my motorbike today because I'm going to work later.</span></p>
                        <p><strong>WOMAN:</strong> And could you tell me what you're doing this morning, I mean, the reason for your trip into town?</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q3</span>I've just been to the hairdresser.</span> You see, I have a job interview at the council in a few days.</p>
                        <p><strong>WOMAN:</strong> Oh really! Well, good luck with that.</p>
                        <p><strong>MAN:</strong> Thanks a lot. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q4</span>And now I'm on my way to buy a suit that I can wear to the interview.</span> I don't actually own one at the moment!</p>
                        <p><strong>WOMAN:</strong> OK. Is that everything you're planning to do in town?</p>
                        <p><strong>MAN:</strong> Yeah. Well, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q5</span>I've got to go and pick up my laptop.</span> It broke a couple of days ago so I took it to the shop to get it fixed. They had to order a spare part, but <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q5</span>apparently it's ready for collection now.</span> I can't wait to get it back.</p>
                        <p><strong>WOMAN:</strong> I'm sure. I hate it when my technology breaks down.....One more thing, it's Saturday today - is that when you like to do your shopping?</p>
                        <p><strong>MAN:</strong> Well it's more a question of when I'm free. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q6</span>If I'm free on a Monday, that's when I choose to come into town. The shops are less busy then, which I always prefer.</span></p>
                        <p><strong>WOMAN:</strong> So, I'd like to ask you a few more questions to get your views about shopping in Broadbeach, if that's ok.</p>
                        <p><strong>MAN:</strong> Sure. What would you like to know specifically?</p>
                        <p><strong>WOMAN:</strong> What would you say you like best about the shops here?</p>
                        <p><strong>MAN:</strong> I'd probably say it's the service you get wherever you go.</p>
                        <p><strong>WOMAN:</strong> OK. And what do you think about the range of shops in Broadbeach?</p>
                        <p><strong>MAN:</strong> Oh you can get almost anything you want here.</p>
                        <p><strong>WOMAN:</strong> And what about recent changes? What do you like and dislike about them? <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>For example, there are a lot of new coffee shops now, are you enjoying them?</span></p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>No, there are too many of them. It's a shame as those places could be occupied by other kinds of shops.</span></p>
                        <p><strong>WOMAN:</strong> What would you like to see instead?</p>
                        <p><strong>MAN:</strong> Well, I think we have enough clothing shops. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q8</span>But there's only one place that sells books at the moment. It'd be nice to have a choice, you know.</span></p>
                        <p><strong>WOMAN:</strong> Right. And have you been to the new shopping centre outside Broadbeach yet, Martyn?</p>
                        <p><strong>MAN:</strong> Yes, once or twice. It's not that far from where I live.</p>
                        <p><strong>WOMAN:</strong> It's a very modern-looking building, isn't it?</p>
                        <p><strong>MAN:</strong> Yes, and it's lovely. The glass roof is certainly impressive. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q9</span>But my favourite thing is the plants they've put around the building.</span> They're amazing, and so big already.</p>
                        <p><strong>WOMAN:</strong> And what about the entertainment facilities? Have you used any of them yet? <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>Like the new cinema?</span></p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>Nah, not yet. I can't see any advantage in having it there because the one in town is actually bigger.</span></p>
                        <p><strong>WOMAN:</strong> OK, well thank you so much for...</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 2</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Hello and welcome to this podcast telling you about our annual business exhibition. This year, as always, it will be full of the very best speakers, features and innovations.</p>
                        <p>Let me start by reading some feedback from James Craig, who's exhibited with us for the past two years. James says, 'I'm director of a company called TalkCon, which is an office phone system. The first year we exhibited, we had a stand in the Business Village, where we made a lot of useful contacts. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q11/12</span>We also used the Breakout area where people could sit down and relax, and try out our products, and due to popular request we used that again last year. Last year we also sponsored the innovative Business Connections Zone where people could leave their contact details on a board to contact other companies, and that also effectively raised our corporate profile.</span> We're hoping that in the coming exhibition we'll also have a presence in the Digital Marketing centre, which is clearly a key area for our company. And also maybe have our own Talkcon Zone, at some stage.'</p>
                        <p>The exhibition's open from 8am to 11 pm and there's a range of special events for you to enjoy in the evening.</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q13/14</span>As well as a unique chance to publicise your company, businesses who exhibit with us can claim discounts on a number of popular brands, including major high street fashion and jewellery outlets, as well as grocery chains. Discounts available range from 3.5% up to an amazing 15%, so you can save a lot of money. In fact, the average saving made by each exhibitor came to over £400! The scheme is available to every member of your organisation so this is a benefit that really does have something for you all.</span></p>
                        <p>Now let me tell you about some of our keynote speakers for this year's exhibition.</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q15</span>Jim Clowrie started off selling vegetables from a small plot, then opened a small café. Rather to his surprise this became a bit of a sensation, and in a remarkably short time he had opened an amazing 76 restaurants worldwide.</span> He'll be telling you how it all happened, and how it changed his life.</p>
                        <p>David France will be giving an inspirational talk about how as a business-minded teenager he managed to set up his own company, and even to be the first person under 18 to get a business bank account. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q16</span>David's company has gone from strength to strength but he isn't just interested in making money he also makes regular donations to organisations helping those in need both in the UK and elsewhere in the world.</span></p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q17</span>Oliver Stanton was born and educated in the UK, and then went to Malaysia where he set up a rubber-wood furniture business. He then built log houses in the mountains in Japan before moving to Hong Kong to set up a digital marketing business. After that he moved back to the UK with his wife Saiphin, and together they opened a Thai café. He'll be telling you about what he discovered during his travels around the world about business practices in different cultures.</span></p>
                        <p>Francesca Heptonstall is a broadcaster and businesswoman who's known for her down-to-earth attitude. After winning a top job in a TV contest, she launched a number of online deal sites. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q18</span>Her main business interest is in technology, but she's also passionate about helping people gain employment and organises an annual jobs fair, so she'll be concentrating on this in her talk.</span></p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q19</span>Salman Khan is the Chief Executive of QBF Enterprises, and has turned around this business from a major publishing business to one of the UK's largest digital marketing service providers. He'll be talking about the need for flexibility to cope with new directions in today's business world.</span></p>
                        <p>Finally, Annie Craven is a consultant and coach who works with people to create lasting changes in their business and life. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q20</span>Her session will offer an interactive look at different obstacles in people's own lives, not just in business. She also looks at how you can overcome them, whether you're starting out in business or at the top of your game.</span></p>
                        <p>Now let me...</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 3</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>MIA:</strong> You know that joint presentation we've got to do this semester, Leo?</p>
                        <p><strong>LEO:</strong> On houses of the future?</p>
                        <p><strong>MIA:</strong> That's right. I'm a bit concerned - are we meant to come up with creative new suggestions for these houses?</p>
                        <p><strong>LEO:</strong> I don't think so. It's more a matter of reporting and evaluating possible developments. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21</span>But we mustn't be too general, we've got to support our points by referring to specific cases. So that'll need a lot of work.</span></p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21</span>I'm afraid so.</span> When's it got to be done by?</p>
                        <p><strong>LEO:</strong> In about 6 weeks, so that's not too much of a rush.</p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q22</span>Good. We'd better decide now what type of housing we're going to focus on. How about housing for different generations living together?</span></p>
                        <p><strong>LEO:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q22</span>We could do. Or accommodation for one person?</span></p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q22</span>I think someone else is doing that. I was wondering about housing for the elderly? That's likely to become more important.</span></p>
                        <p><strong>LEO:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q22</span>Yeah that's true. But I think your suggestion about intergenerational living might be more interesting - let's go with that.</span></p>
                        <p><strong>MIA:</strong> OK. Now I think the future demand is mainly going to be for accommodation in urban areas. So one way of meeting that demand might be to use existing commercial buildings and adapt them to form accommodation...</p>
                        <p><strong>LEO:</strong> ... or come up with original ways of organising space so that people can live in smaller homes. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23</span>But I think the solution is to design multi-storey apartment blocks.</span></p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23</span>Building up rather than out, yes.</span></p>
                        <p><strong>LEO:</strong> Let's think of some specific developments for houses of the future.</p>
                        <p><strong>MIA:</strong> OK. How about increased use of roof space on high-rise buildings for gardens.</p>
                        <p><strong>LEO:</strong> Yes. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q24</span>In fact it doesn't have to be high-rise, you can do it on a one-storey building in a suburb, but it would greatly improve how you feel if you live in an urban high-rise.</span></p>
                        <p><strong>MIA:</strong> Especially if you don't have a balcony.</p>
                        <p><strong>LEO:</strong> Yes. I think homes of the future will all need access to a shared working space, somewhere in the same building or group of houses, where people can go and work instead of just having a laptop on the kitchen table.</p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q25</span>Yes, so they aren't having to travel to an office but can still interact with others. That's often how new ideas get generated by chatting to someone from a different profession.</span></p>
                        <p><strong>LEO:</strong> Yeah. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q26</span>I read about a type of design where the internal walls of an apartment are moveable, so the space can be adapted over time as people's needs change. Like when children leave school and start working but still continue to live with their parents for many years? Or when an elderly relative moves in with the family... it would mean they could still have their own space, specially designed for their needs.</span></p>
                        <p><strong>MIA:</strong> Yes. Have you heard about those smart bathroom mirrors which can monitor people's health? They recognise signs of illness and contact a doctor automatically?</p>
                        <p><strong>LEO:</strong> Hmm, not so sure they're a good idea.</p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q27</span>Nor am I. People might worry about conditions which aren't serious at all.</span></p>
                        <p><strong>LEO:</strong> What about transport? Wouldn't it be good if there were bike sheds with charging points, so people could store their electric bikes securely and charge them up at the same time.</p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q28</span>Yes. That would encourage more people to cycle, instead of using their car. Much better for the planet.</span></p>
                        <p><strong>LEO:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>I read about one housing development where cars had to be left just outside it, so the centre was all a pedestrianised area. Great for families with children.</span></p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>Maybe. But what if you're disabled or elderly, and can't walk far? It wouldn't be so good for people like that.</span></p>
                        <p><strong>LEO:</strong> No.</p>
                        <p><strong>MIA:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>I saw a scheme for communal vegetable plots, where neighbours could decide what to grow together. That'd be a great way for older people to get to know one another, especially if they're no longer going out to work.</span></p>
                        <p><strong>LEO:</strong> Yes, doing something together's always more enjoyable, isn't it? Do you think...</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 4</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Today's lecture is about studies that look at how music therapy can be used to help patients who undergo surgery. Now, most people undergo a surgical procedure at some point in their lives. And more than fifty-one million operations are performed annually in the USA. But there's no escaping the fact that most patients feel uncomfortable following surgery. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q31</span>They may also be negatively affected by having their routine disturbed, you know, like if they can't do the things they normally do, or have to devote a lot of time to appointments such as physiotherapy, to aid their recovery.</span></p>
                        <p>Currently, the main strategy for improving recovery is medication to control pain, and this can be administered to patients in the short, medium or longer term, depending on the extent of their surgery. But music is still not an everyday part of the post-surgical phase, despite a wealth of relevant studies supporting its potential in recovery.</p>
                        <p>Earlier this year, a research team set out to assess all the available evidence so that they could highlight the potential for music in surgical recovery. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q32</span>They identified nearly a hundred trials involving a total of seven thousand patients who were played recorded music as part of their post-operative care.</span> The researchers then looked at what impact the music had on the patients. They discovered that patients who had been played music reported feeling happier and more satisfied in the post-operative phase, and the length of their stay was shorter than for patients who had not listened to any music.</p>
                        <p>The researchers also explored the patients' choice of music, and their findings showed that a wide variety of music styles was evident. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q33</span>However, a common factor was that the chosen music had a calming quality.</span> Some of the patients listened to music with headphones, but it was quiet enough not to prevent them from being able to communicate with nurses and other staff. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q34</span>More often though, the mode of delivery was by what are known as music pillows.</span> These broadcast sound that is only audible to the person lying on them. The research involved testing music before, during or after operations or a combination. Some patients listened to the music just once a day, while others had several episodes a day.</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q35</span>When asked to report their experience of listening to music, surgical patients said that either they had no feelings of anxiety at any point, or those feelings were only slight.</span> Patients who hadn't listened to music, on the other hand, reported higher levels of dissatisfaction. This feedback from all of the patients was then cross-checked against their medical notes. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q36</span>And in every case, those who were given music to listen to didn't need as much medication to ease their pain as those patients who weren't played music.</span> The type of music, patient choice and timing, before, during or after the surgery didn't make much difference. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q37</span>And it even worked when patients were played music under general anaesthetic, although the positive effects were greater when patients were awake.</span></p>
                        <p>All the evidence suggests that music has a positive effect on post-operative patients, but it's not entirely clear how or why this is the case. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q38</span>A lot of people listen to music in daily life as a way to relax and forget their problems, but the researchers came to the conclusion that it worked on patients by distraction.</span> I suppose it was something familiar and gave them something they could control.</p>
                        <p>The researchers say there is now sufficient research to demonstrate that music should be available to all patients undergoing operations. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q39</span>They say patients should be able to choose what they'd like to listen to, and if they prefer, recordings taken from nature can be just as good as music.</span> Surgical teams may prefer patients to listen to music before the procedure or as soon as they arrive back onto the ward. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q40</span>Clearly, there's more to learn about this area, and the team now plan to focus their next research on the most appropriate volume to play the music at.</span> And I look forward to reading the results of their study.</p>
                        <p>It will be interesting to see...</p>
                    </div>
                `
            },
            
            "Cambridge 21 - Listening Test 2": {
                answers: {
                    1: "13", 2: "48", 3: "pizza", 4: "India", 5: "mirror",
                    6: "6", 7: "natural", 8: "67.50", 9: "shirt", 10: "hammer",
                    11: ["B", "E"], 12: ["B", "E"], 13: ["C", "D"], 14: ["C", "D"],
                    15: "F", 16: "B", 17: "D", 18: "A", 19: "H", 20: "E",
                    21: ["B", "E"], 22: ["B", "E"], 23: ["C", "D"], 24: ["C", "D"],
                    25: ["A", "C"], 26: ["A", "C"], 27: "C", 28: "D", 29: "F", 30: "A",
                    31: "Pollution", 32: "tax", 33: "chocolate", 34: "timing", 35: "cost", 
                    36: "rules", 37: "diving", 38: "vegan", 39: "wifi", 40: "videos"
                },
                audio: {
                    1: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-2-1.mp3",
                    2: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-2-2.mp3",
                    3: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-2-3.mp3",
                    4: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-2-4.mp3"
                },
                content: {
                    1: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 1: Questions 1-10</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 overflow-x-auto">
                            <table class="w-full text-left text-gray-800 dark:text-gray-200 min-w-[600px]">
                                <thead>
                                    <tr class="border-b-2 border-gray-300 dark:border-slate-500">
                                        <th class="py-2 pr-4 font-bold">Course</th>
                                        <th class="py-2 pr-4 font-bold">Date</th>
                                        <th class="py-2 pr-4 font-bold">Cost</th>
                                        <th class="py-2 font-bold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-slate-600">
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Vietnamese food</td>
                                        <td class="py-3 pr-4"><input type="text" id="ielts-ans-1" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(1)"></td>
                                        <td class="py-3 pr-4">£59</td>
                                        <td class="py-3">It provides information on the use of herbs.<br>There are no places at present.</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Bread making</td>
                                        <td class="py-3 pr-4">20 March</td>
                                        <td class="py-3 pr-4">£<input type="text" id="ielts-ans-2" class="border-b-2 border-gray-400 bg-transparent w-16 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(2)"></td>
                                        <td class="py-3">There is also an extra charge for ingredients.<br>Participants make white bread, sourdough and <input type="text" id="ielts-ans-3" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(3)">.</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Face massage</td>
                                        <td class="py-3 pr-4">23 February</td>
                                        <td class="py-3 pr-4">£35</td>
                                        <td class="py-3">The teacher trained in <input type="text" id="ielts-ans-4" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(4)">.<br>Bring a <input type="text" id="ielts-ans-5" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(5)">.</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Candle making</td>
                                        <td class="py-3 pr-4"><input type="text" id="ielts-ans-6" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(6)"></td>
                                        <td class="py-3 pr-4">£52</td>
                                        <td class="py-3">Only <input type="text" id="ielts-ans-7" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(7)"> ingredients are used.<br>The candles can be used as presents.</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Silk painting</td>
                                        <td class="py-3 pr-4">18 May</td>
                                        <td class="py-3 pr-4">£<input type="text" id="ielts-ans-8" class="border-b-2 border-gray-400 bg-transparent w-16 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(8)"></td>
                                        <td class="py-3">Bring an apron or old <input type="text" id="ielts-ans-9" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(9)">.</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">DIY for beginners</td>
                                        <td class="py-3 pr-4">24 February</td>
                                        <td class="py-3 pr-4">£125</td>
                                        <td class="py-3">Learn how to:<br>• use a drill, saw and <input type="text" id="ielts-ans-10" class="border-b-2 border-gray-400 bg-transparent w-20 px-1 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(10)"><br>• put up a shelf.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    2: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 2: Questions 11-20</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 11-12: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO pieces of advice are given about the Marsden Coastal Walk?</p>
                        <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-11-12">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. Stop for lunch in an ancient town.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. Don't miss the ruins of a certain building.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. Catch a boat to the start of this walk.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. Be careful of the steep and rocky paths.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. Don't worry about getting lost.</label>
                        </div>
                        
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 13-14: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO things are said about the Melby Heritage Walk?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-13-14">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. This walk is mostly downhill.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. The paths can get busy during the day.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. This is a circular walk.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. A tower stands on the site of an older structure.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. There are far-reaching views the whole way.</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 15-20: Label the map below.</p>
[MAP:https://plain-apac-prod-public.komododecks.com/202608/26/OetQnhkYnWqiWGU5Uh0F/image.png]
[TICKBOX_AI:15-Exhibition|16-Baths|17-Tools|18-Vehicles|19-Ponies|20-Education centre]
                    `,
                    3: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 3: Questions 21-30</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 21-22: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO facts in the sessions on food safety were new information for Nadia and Fergus?</p>
                        <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-21-22">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. the amount of plastic in the ocean</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. the number of diseases caused by contaminated food</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. the amount of food that is wasted</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. the number of people who are obese</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. the result of treating animals with antibiotics</label>
                        </div>
                        
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 23-24: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO features of a project aiming to prevent food fraud impressed Fergus?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-23-24">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. the new technology it used</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. the publicity it received</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. the use of multiple tests on food items</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. the variety of dietary requirements included</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. the way information was made widely accessible</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 25-26: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO topics do both students recommend should be included in the course?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-25-26">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. sustainable fishing</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. targeted nutrition</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. global differences in consumption</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. sustainable agriculture</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. digital technology and food</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 27-30: Complete the flow-chart below.</p>
                        <p class="text-gray-500 italic mb-4">Choose FOUR answers from the box and write the correct letter, A-F.</p>
                        <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li><strong>A.</strong> This was challenging but enjoyable.</li><li><strong>B.</strong> This led to some disagreement.</li>
                                <li><strong>C.</strong> This was easy to decide on.</li><li><strong>D.</strong> This was helped by the guidelines provided.</li>
                                <li><strong>E.</strong> This seemed like an unnecessary stage.</li><li><strong>F.</strong> This involved selecting a new ingredient.</li>
                            </ul>
                        </div>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 space-y-4">
                            <h5 class="font-bold text-center dark:text-white">Student project: developing a new food product</h5>
                            <p class="text-center">Initial aim: <input type="text" id="ielts-ans-27" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="text-center">⬇</p>
                            <p class="text-center">Literature review: <input type="text" id="ielts-ans-28" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="text-center">⬇</p>
                            <p class="text-center">Product development: <input type="text" id="ielts-ans-29" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="text-center">⬇</p>
                            <p class="text-center">Product production: <input type="text" id="ielts-ans-30" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                        </div>
                    `,
                    4: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 4: Questions 31-40</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                            <h5 class="font-bold text-lg mb-4 dark:text-white">Challenges facing the cruise ship industry</h5>
                            <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                <h6 class="font-bold underline">Problems with overtourism</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap"><input type="text" id="ielts-ans-31" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(31)"> is one of the worst problems.</li>
                                    <li class="flex items-center gap-2 flex-wrap">A tourist <input type="text" id="ielts-ans-32" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(32)"> is being introduced in some cities to reduce numbers, e.g. Barcelona.</li>
                                    <li class="flex items-center gap-2 flex-wrap">Bruges: action was taken to limit day trips from the nearby port because the city was becoming a 'theme park' (e.g. many shops were only stocking <input type="text" id="ielts-ans-33" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(33)"> and souvenirs).</li>
                                    <li class="flex items-center gap-2 flex-wrap">Dubrovnik: limits the number of tourists by managing the <input type="text" id="ielts-ans-34" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(34)"> of cruise ship arrivals.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">Problems of perception</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li>Cruises are generally associated with the elderly.</li>
                                    <li class="flex items-center gap-2 flex-wrap">There is an assumption about the <input type="text" id="ielts-ans-35" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(35)"> of cruises.</li>
                                    <li class="flex items-center gap-2 flex-wrap">People think there may be too many <input type="text" id="ielts-ans-36" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(36)">.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">Solutions</h6>
                                <p class="mb-2">Cruise lines are attracting younger customers by:</p>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li>becoming more sustainable e.g. using hybrid engines.</li>
                                    <li class="flex items-center gap-2 flex-wrap">having a wide range of activities e.g. boxing, <input type="text" id="ielts-ans-37" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(37)"> and well-being programmes.</li>
                                    <li class="flex items-center gap-2 flex-wrap">offering a diverse selection of food including <input type="text" id="ielts-ans-38" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(38)"> options.</li>
                                    <li class="flex items-center gap-2 flex-wrap">providing reliable <input type="text" id="ielts-ans-39" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(39)">.</li>
                                    <li class="flex items-center gap-2 flex-wrap">improving marketing on social media with high quality <input type="text" id="ielts-ans-40" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(40)">.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                transcript: `
                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 1</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>MAN:</strong> Hello, Steynford College external course registration, can I help you?</p>
                        <p><strong>WOMAN:</strong> Yeah, I'm ringing to find out about one-day classes next year. I got a leaflet about them in the post but I lost it, and I understand some of the classes are filling up fast, so I might need to book quite soon if I want to go ahead.</p>
                        <p><strong>MAN:</strong> Sure. Can you remember which one you were considering?</p>
                        <p><strong>WOMAN:</strong> There were a few actually. I remember there was one on how to make Vietnamese food that sounded good. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q1</span>I think that was on the 13th of January.</span> It cost about 60 pounds.</p>
                        <p><strong>MAN:</strong> Yes, you're right about the date, but it's 59 pounds actually. It's a very popular class, and among other things the teacher explains how Vietnamese food includes lots of different herbs. I'm afraid that all the places are taken at present, but I can put you on the waiting list if you want?</p>
                        <p><strong>WOMAN:</strong> No, that's OK. I'm quite interested in the bread making class. That's in March sometime, isn't it?</p>
                        <p><strong>MAN:</strong> Yeah, the 20th of March. Would you like to register for that?</p>
                        <p><strong>WOMAN:</strong> I'm not sure. How much is it?</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q2</span>The actual cost is £48</span> but then there's an extra charge as well as that for the ingredients - I'm not sure how much that is, no more than twenty pounds I think.</p>
                        <p><strong>WOMAN:</strong> So what sorts of things do they make in the class?</p>
                        <p><strong>MAN:</strong> Oh, various types of bread; I think they make white bread and then they make sourdough, that seems to be very fashionable at present, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q3</span>and they learn how to make pizza, which is apparently really good.</span></p>
                        <p><strong>WOMAN:</strong> Well I'd definitely be interested in that, but there were also a few other classes that sounded interesting. I think there was one on face massage? I'd love to learn how to do that.</p>
                        <p><strong>MAN:</strong> Yeah, that's on the 23rd of February and it costs just £35 for the day. The teacher's great, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q4</span>the type of massage done is a traditional technique used in India</span> and she actually did her training there. The massage is meant to relax you and get rid of lines and wrinkles. You practise it on yourself so <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q5</span>you have to take a mirror to the class</span>, so you can see what you're doing.</p>
                        <p><strong>WOMAN:</strong> OK.</p>
                        <p><strong>WOMAN:</strong> And I think there was a class in candle making?</p>
                        <p><strong>MAN:</strong> Yes that's sometime in April, I think. Let me check ... <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q6</span>yes, it's on the 6th.</span> It was on the 23rd of January but they had to change the date. It's just £52. That's a popular course too. I think one reason why people like it is because <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>the candles are all made out of natural products.</span> It's filling up fast but there's still a few places left.</p>
                        <p><strong>WOMAN:</strong> Yes one of my friends did that class. She said the candles make really good presents. In fact she gave me one.</p>
                        <p><strong>MAN:</strong> By the way, have you heard about the class on silk painting? That's being held on the 18th of May. You learn how to create designs on silk fabric and colour them using special dyes. Apparently people can produce beautiful artworks that way, either to put on the wall as a picture or to use for something like a scarf. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q8</span>It's £67.50, which is really good value</span> I think there's a similar class I've seen that was £110.</p>
                        <p><strong>WOMAN:</strong> That sounds interesting. Would I need to bring the silk?</p>
                        <p><strong>MAN:</strong> No, the only thing is everyone has to bring something to protect their clothing, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q9</span>like an apron if you've got one, or a shirt that you don't use any more</span>, because the dye can really stain your clothes.</p>
                        <p><strong>WOMAN:</strong> Right. Then the last class I was considering was a bit different, that was on DIY for beginners. I'd like to learn how to do household repairs. Are there any places left on that?</p>
                        <p><strong>MAN:</strong> That's on the 24th of February - yes, there are a few places. It's a bit more expensive - it's £125 - but it's a very popular class. You learn how to use an electric drill and a saw.</p>
                        <p><strong>WOMAN:</strong> Yeah, that would be really useful, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>and I even need to learn how to use a hammer</span> because I always end up hitting my fingers.</p>
                        <p><strong>MAN:</strong> Yes, you'll do that too.</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 2</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Here is some information about history and nature walks in the region. They can be completed in less than a day and also be combined with a visit to Melby, a former coal mine now open to the public.</p>
                        <p>The Marsden Coastal Walk is suitable for all the family as there are no strenuous climbs. The route begins at Marsden harbour, where there are hourly ferries to and from the beautiful Hooker Island, a great place for fishing. The walk covers part of the coastal path trail. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q11/12</span>As there are clear signposts all along the way, you don't even need to take a map with you.</span> At one point, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q11/12</span>the route goes inland slightly and passes a castle built in the 1400s</span> near to a now-vanished market town. The castle's now just a pile of stones but it's a great place to take photos, and fascinating information boards show what it once looked like. If you set off early, you can be back in time for midday.</p>
                        <p>The Melby Heritage Walk is a great place to take photos, especially of the night sky. At certain times of the year, people come here from far and wide. They climb to the top of the valley and take pictures of the stars. In the daytime, it's completely different. As you hike through the dense woods in the valley bottom, the only things you'll hear are the sound of your own footsteps. At the highest point, you can stop to take in the views, and those with lots of energy <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q13/14</span>can climb the tower that's situated where there was once a seventeenth century hunting lodge. The route continues along the tops of the hills and brings you back down to the starting point</span> - the car park at Melby Coal Mine.</p>
                        <p>Melby Coal Mine has been open to the public for twenty years and has won awards for its visitor experience. Many of the buildings around the mine are still standing and have been converted into display areas.</p>
                        <p>Firstly, there's an exhibition showing the history of the mine, with many original black and white photos. To see that, you <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q15</span>go from the car park, via a covered walkway to the Main Visitor Centre. Go through the ticket office to an area where there are lockers to leave heavy bags in, and where you can borrow raincoats. Beyond that room is the exhibition.</span></p>
                        <p>There's a small bathhouse where miners used to wash after their shift underground. You can see that in the building <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q16</span>directly to the north of the engine house.</span> The boiler has gone from there now, but there are lines of tin baths on the stone floor.</p>
                        <p>There's a display of early mining tools from the days before mechanisation. You can find that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q17</span>in a small L-shaped building in the middle of the northern boundary</span> of the site. It's incredible to think how miners were able to use hand implements to cut through rock.</p>
                        <p>The vehicle shed, where you can find wagons of different sizes, along with some of the hi-tech cutting machines that were in use until the mine closed, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q18</span>is in the southwest corner of the site</span>, and can be accessed via a covered walkway.</p>
                        <p>There is a field with ponies, which are always popular with children, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q19</span>on the north-eastern boundary of the site</span>, not approached via a covered walkway.</p>
                        <p>The other building to mention is the education centre. This is where school groups go when they visit the mine, but it's also accessible to the public as it contains a library and small gift shop. The centre is <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q20</span>connected to the ticket office via a short section of covered walkway.</span></p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 3</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>TUTOR:</strong> Thanks for coming along, Nadia and Fergus. So this is a chance for you to give us some feedback about different aspects of your course. What would you like to begin with?</p>
                        <p><strong>NADIA:</strong> I've enjoyed the sessions on food safety. There was some information there that I found really surprising, although some was stuff I knew already, like the rise in rates of obesity.</p>
                        <p><strong>FERGUS:</strong> Yeah, that's been in the news a lot. But I hadn't realised that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>unsafe food causes more than 200 different diseases.</span></p>
                        <p><strong>NADIA:</strong> No, I'd no idea it was that many. And speaking of diseases, I knew resistance to antibiotics is on the increase, but I didn't know why ...</p>
                        <p><strong>FERGUS:</strong> ...that it's partly because when animals are treated with antibiotics then consumed by humans, the <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>antibiotics get into the food chain.</span> I had no idea about that either.</p>
                        <p><strong>NADIA:</strong> Then the sessions provided a lot of information about plastic pollution from food packaging in the ocean, but I think that most of us were already aware of that.</p>
                        <p><strong>FERGUS:</strong> Yeah. But I thought we could have done more on how much food is thrown away unnecessarily through fear of it being out of date, that was only mentioned in passing.</p>
                        <p><strong>TUTOR:</strong> OK, I'll bear that in mind. What did you think about the sessions from visiting lecturers, Fergus?</p>
                        <p><strong>FERGUS:</strong> For me the most interesting one was about that project to prevent companies giving incorrect information to consumers about food.</p>
                        <p><strong>TUTOR:</strong> Ah, food fraud, yes.</p>
                        <p><strong>FERGUS:</strong> I thought it was really good to <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>address a problem that's faced by so many different groups</span> - people with special religious rules, as well as vegetarians and vegans.</p>
                        <p><strong>NADIA:</strong> And those with allergies.</p>
                        <p><strong>FERGUS:</strong> Yeah. And another thing, we've had effective ways of analysing DNA for some time now and these can easily be applied to analysing food. But what the researchers succeeded in doing was to ensure that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>these tests were carried out at different stages in the food's journey</span> from the producer to the consumer. So they knew that the food actually came from the place it was supposed to, and had the ingredients it was meant to.</p>
                        <p><strong>NADIA:</strong> Exactly. So customers can be confident about what they buy.</p>
                        <p><strong>FERGUS:</strong> And the researchers had a good system for publicising their findings too.</p>
                        <p><strong>NADIA:</strong> Well, I thought there were some problems with that, actually.</p>
                        <p><strong>TUTOR:</strong> OK. And do you have any recommendations for new topics that we could include in the course?</p>
                        <p><strong>NADIA:</strong> Well, I'm interested in how crop yields can be increased without damaging the environment.</p>
                        <p><strong>FERGUS:</strong> But we've already done quite a bit on that - but <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q25/26</span>not so much on the seafood industry</span>, where stocks are in danger of being overexploited as a food source unless we can find ways of keeping stocks up.</p>
                        <p><strong>NADIA:</strong> Yes, that'd be a good topic. And I'm interested in the idea of a personalised approach to diet, now we have the technology to analyse exactly what individuals need.</p>
                        <p><strong>FERGUS:</strong> That sounds more like a medical topic than food science.</p>
                        <p><strong>NADIA:</strong> OK. What about <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q25/26</span>sessions on the variety of food and eating habits around the world?</span> That's very relevant nowadays.</p>
                        <p><strong>FERGUS:</strong> Yes, I think the whole class would be interested in that.</p>
                        <p><strong>NADIA:</strong> Then there's technological stuff, things like 3D printing of food and smart packaging.</p>
                        <p><strong>FERGUS:</strong> Mmm - maybe too specialist.</p>
                        <p><strong>TUTOR:</strong> Now, I'm particularly interested in your project - the one where you developed a new food product. So talk me through the stages... first you had to decide on your initial aim.</p>
                        <p><strong>FERGUS:</strong> We decided we wanted to create something people could eat on the go rather than in a restaurant.</p>
                        <p><strong>NADIA:</strong> Yeah so we chose falafel, which was originally a Middle Eastern snack.</p>
                        <p><strong>FERGUS:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q27</span>We made up our minds about that pretty quickly.</span> I know some students found it a lot harder to choose, and wasted a lot of time.</p>
                        <p><strong>NADIA:</strong> Then we had to do the literature review. We hadn't done one of these before so, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q28</span>the handout with advice for the project was very useful here.</span></p>
                        <p><strong>FERGUS:</strong> Yes, especially the advice on how to present the information. Then product development, actually deciding what we'd use to make the falafel, and for me the interesting thing about that was that we wanted it to be something a bit different from an ordinary falafel.</p>
                        <p><strong>NADIA:</strong> We really made the right choice when we finally <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>decided to use jackfruit, even though it wasn't something that either of us had ever tasted before.</span></p>
                        <p><strong>FERGUS:</strong> Yeah, like the name tells you, it's a fruit but actually it's really good in savoury dishes. The product production, working out how to make the falafel, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>was harder than I expected</span> because I'd never made them before.</p>
                        <p><strong>NADIA:</strong> It was mostly trial and error. We started off with the basic recipe and then experimented and when it went wrong...</p>
                        <p><strong>FERGUS:</strong> ...which it did a lot of the time...</p>
                        <p><strong>NADIA:</strong> ...we just moved on and <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>kept adapting it</span> and in the end it turned out fine and we had a lot of fun.</p>
                        <p><strong>FERGUS:</strong> We did!</p>
                        <p><strong>TUTOR:</strong> Thank you. Well, your project was a very good</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 4</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>For my presentation today I'm going to talk about some of the issues facing the cruise ship industry and then some ways these can be addressed. The cruise ship industry has partly been responsible for the effects of overtourism in recent decades. Overtourism occurs in places where excessive numbers of tourists cause significant problems. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q31</span>Pollution, for example, is among the greatest threats</span> to many popular tourist destinations.</p>
                        <p>Of course, for many places it's a difficult balance to achieve. They want to promote their city or island as a desirable tourist destination, but at the same time, are unable to cope with thousands of cruise ship passengers on a daily basis. The trouble is, excessive tourism is destroying the beauty spots and places of interest that people come to visit. Several cities, such as Barcelona, have responded by <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q32</span>imposing a tax which all visitors</span> to the city from cruise ships have to pay. But as it's only a couple of euros, many green campaigners think it won't deter enough people to make any difference.</p>
                        <p>Bruges is another city which became impossible to navigate at times because of the huge numbers of cruise passengers arriving on day trips from the port of Zeebrugge. The city was becoming like a 'theme park', with shops only catering for tourists, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q33</span>selling chocolate, which Belgium is famous for</span>, and other souvenirs. The local council took action to limit cruise passengers to a more manageable level.</p>
                        <p>Dubrovnik had to limit the numbers of cruise ships after it became extremely popular as a cruise ship destination when it featured in a hugely successful TV series. What it does now is <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q34</span>control the timing of all cruise ship entries</span> to the city's port. However, many people feel this measure does not go far enough.</p>
                        <p>Cruise ships may be unpopular in some of their destinations but they also have an image problem. They've always been perceived as a safe holiday for the elderly, with not much on offer for families or young couples. A recent survey showed that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q35</span>cost is also a major factor</span> in putting younger groups off going on a cruise. But what they don't realise is that compared to other types of package holidays, cruises can actually be good value, as all activities and drinks are often included. And another perception is that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q36</span>cruises have lots of rules about what to wear</span> and how to behave. But these days, most cruises are no longer very formal and behind the times.</p>
                        <p>So what solutions are there for cruise lines to overcome some of these problems? How can they appeal to younger customers? Well one selling point is that cruise ships are becoming more sustainable. New ships are built with hybrid engines with large batteries which means ships do not have to keep their engines running while docked.</p>
                        <p>Cruise lines are also designing ships specially for those in the age range of 21 to 45. The décor in these feels contemporary and there are a range of activities on board that you wouldn't find on a more traditional cruise. There's <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q37</span>even a boxing ring on one ship, and most offer diving expeditions.</span> But there's also a huge focus on well-being with a variety of sessions of different kinds.</p>
                        <p>Food is always a very important part of any cruise and cruise ships have had to radically update their menus to suit the tastes of their younger customers. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q38</span>Vegan dishes are standard</span>, for example. The restaurants on board have also gone paperless with menus available on screen.</p>
                        <p>Unlike older generations who went on cruises largely to get away from everything, younger people expect to be able to keep in touch with friends and family. Many people going on longer cruises also spend time working, so companies have to <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q39</span>guarantee wifi that can be relied upon</span> at all times.</p>
                        <p>My grandparents used to love looking through cruise brochures, even when they weren't planning on going on a cruise. Until very recently TV ads for cruises always felt dated and aimed at retirees. Cruise lines have been slow to adopt the power of social media but that's all changing. Leading cruise lines now employ top agencies to <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q40</span>produce first rate videos for social media</span> channels.</p>
                        <p>It will be interesting to see whether ...</p>
                    </div>
                `
            },
            "Cambridge 21 - Listening Test 3": {
                answers: {
                    1: "Northern", 2: "week", 3: "250", 4: "voucher", 5: "window",
                    6: "books", 7: "blanket", 8: "dolphins", 9: "Drum", 10: "Italian",
                    11: ["C", "E"], 12: ["C", "E"], 13: ["B", "E"], 14: ["B", "E"],
                    15: "B", 16: "C", 17: "F", 18: "A", 19: "B", 20: "D",
                    21: ["B", "D"], 22: ["B", "D"], 23: ["C", "E"], 24: ["C", "E"],
                    25: "G", 26: "B", 27: "F", 28: "H", 29: "A", 30: "E",
                    31: "disease", 32: "ecosystem", 33: "holidays", 34: "pets", 35: "sugar", 
                    36: "light", 37: "virus", 38: "behaviour", 39: "database", 40: "photograph"
                },
                audio: {
                    1: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-3-1.mp3",
                    2: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-3-2.mp3",
                    3: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-3-3.mp3",
                    4: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-3-4.mp3"
                },
                content: {
                    1: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 1: Questions 1-10</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                            <h5 class="text-center font-bold text-lg mb-6 dark:text-white">Ferry to Shetland Islands</h5>
                            <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                <h6 class="font-bold underline">Ferries</h6>
                                <ul class="list-disc pl-5 space-y-2">
                                    <li class="flex items-center gap-2 flex-wrap">Name of ferry company: <input type="text" id="ielts-ans-1" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(1)"></li>
                                    <li class="flex items-center gap-2 flex-wrap">Ferries depart seven times per <input type="text" id="ielts-ans-2" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(2)"> in summer</li>
                                    <li class="flex items-center gap-2 flex-wrap">Cost for four people with car: a little less than £ <input type="text" id="ielts-ans-3" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(3)"></li>
                                    <li class="flex items-center gap-2 flex-wrap">Cancellation policy: receive a <input type="text" id="ielts-ans-4" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(4)"> (if cancelled a month in advance)</li>
                                </ul>
                                <h6 class="font-bold mt-6 underline">Advice</h6>
                                <ul class="list-disc pl-5 space-y-2">
                                    <li>Cabins:<ul class="list-[circle] pl-6 mt-1">
                                        <li class="flex items-center gap-2 flex-wrap">book one with a <input type="text" id="ielts-ans-5" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(5)"></li>
                                        <li>luxury cabins have a TV</li>
                                    </ul></li>
                                    <li class="flex items-center gap-2 flex-wrap">Bring snacks and <input type="text" id="ielts-ans-6" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(6)"> for the children</li>
                                    <li class="flex items-center gap-2 flex-wrap">A <input type="text" id="ielts-ans-7" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(7)"> is required for the dog kennels</li>
                                    <li class="flex items-center gap-2 flex-wrap">Try to see <input type="text" id="ielts-ans-8" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(8)"> in the morning</li>
                                    <li class="flex items-center gap-2 flex-wrap">If time, visit <input type="text" id="ielts-ans-9" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(9)"> Castle</li>
                                    <li class="flex items-center gap-2 flex-wrap">The <input type="text" id="ielts-ans-10" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(10)"> restaurant in a nearby village is recommended</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    2: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 2: Questions 11-20</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 11-12: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO explanations for the popularity of street food are given?</p>
                        <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-11-12">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. low price</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. locally sourced</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. freshly made</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. convenience</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. unusual food</label>
                        </div>
                        
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 13-14: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO places are recommended for new street food businesses?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-13-14">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. music festivals</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. food markets</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. weddings</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. parties</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. parks</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 15-16: Choose the correct letter, A, B or C.</p>
                        <div class="space-y-6 mb-8 dark:text-white">
                            <div id="q15-container">
                                <p class="font-semibold mb-2">15. What does the speaker say about getting equipment for a street food business?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-15">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="A"> A. High quality equipment is a good investment.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="B"> B. It's best to buy second-hand equipment.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="C"> C. Renting equipment can be cheap.</label>
                                </div>
                            </div>
                            <div id="q16-container">
                                <p class="font-semibold mb-2">16. What advice is given about creating a product for a street food business?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-16">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="A"> A. Provide information about the ingredients.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="B"> B. It is important to have an original product.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="C"> C. The presentation is an important factor.</label>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 17-20: What problem did the owners of each of the following street food businesses experience?</p>
                        <p class="text-gray-500 italic mb-4">Choose FOUR answers from the box and write the correct letter, A-F.</p>
                        <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li><strong>A.</strong> Some ingredients were too expensive.</li><li><strong>B.</strong> The meals took a long time to prepare.</li>
                                <li><strong>C.</strong> They had no money for marketing.</li><li><strong>D.</strong> It was difficult to get a permit to sell food.</li>
                                <li><strong>E.</strong> A competitor was selling similar food in their area.</li><li><strong>F.</strong> They worked very long hours.</li>
                            </ul>
                        </div>
                        <div class="space-y-3 dark:text-white">
                            <p class="flex items-center gap-3">17. Thai Basil <input type="text" id="ielts-ans-17" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">18. Basque <input type="text" id="ielts-ans-18" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">19. Lou's kitchen <input type="text" id="ielts-ans-19" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">20. Chip Chop <input type="text" id="ielts-ans-20" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                        </div>
                    `,
                    3: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 3: Questions 21-30</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 21-22: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO points do the speakers make about the terms 'ethical' and 'sustainable' fashion?</p>
                        <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-21-22">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. Their definitions keep changing.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. People think they mean the same thing.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. The term 'eco-friendly' is preferable.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. They are often used imprecisely.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. Companies should avoid using them on clothing labels.</label>
                        </div>
                        
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 23-24: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO claims about wool production do the speakers disagree with?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-23-24">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. Sheep are generally well-treated.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. Wool is easy to recycle.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. Wool is a long-lasting fabric.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. Wool production involves few chemicals.</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. Sheep do less environmental damage than other livestock.</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 25-30: What comment do the speakers make about each of the following semi-synthetic fabrics?</p>
                        <p class="text-gray-500 italic mb-4">Choose SIX answers from the box and write the correct letter, A-H.</p>
                        <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li><strong>A.</strong> The production process is fuel efficient.</li><li><strong>B.</strong> It is the least sustainable of alternative fabrics.</li>
                                <li><strong>C.</strong> Production costs are high.</li><li><strong>D.</strong> It provides additional health benefits.</li>
                                <li><strong>E.</strong> It is not durable in the long-term.</li><li><strong>F.</strong> It needs to be produced in a certain way to be sustainable.</li>
                                <li><strong>G.</strong> Chemicals required for production can be reused.</li><li><strong>H.</strong> This is from a wholly sustainable source.</li>
                            </ul>
                        </div>
                        <div class="space-y-3 dark:text-white">
                            <p class="flex items-center gap-3">25. Lyocell <input type="text" id="ielts-ans-25" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">26. Cupro <input type="text" id="ielts-ans-26" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">27. Bamboo <input type="text" id="ielts-ans-27" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">28. EcoVero <input type="text" id="ielts-ans-28" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">29. Cork <input type="text" id="ielts-ans-29" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">30. Hemp <input type="text" id="ielts-ans-30" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                        </div>
                    `,
                    4: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 4: Questions 31-40</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                            <h5 class="font-bold text-lg mb-4 dark:text-white">Invasive species</h5>
                            <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                <p class="mb-2 font-bold">Definition: an animal or plant that causes harm to an environment after being introduced by humans</p>
                                
                                <h6 class="font-bold mt-6 underline">An invasive species can be a problem when it:</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li>eats native species.</li>
                                    <li class="flex items-center gap-2 flex-wrap">introduces a new <input type="text" id="ielts-ans-31" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(31)">.</li>
                                    <li>takes food from native species.</li>
                                    <li class="flex items-center gap-2 flex-wrap">threatens an entire <input type="text" id="ielts-ans-32" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(32)">.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">How invasive species spread</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap">accidentally e.g. via people returning from their <input type="text" id="ielts-ans-33" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(33)"> or on cargo ships</li>
                                    <li class="flex items-center gap-2 flex-wrap">intentionally e.g. for pest control, or as <input type="text" id="ielts-ans-34" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(34)">.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">Examples of invasive species</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li><strong>Rhinella marina (toads)</strong>
                                        <ul class="list-[circle] pl-6 mt-1 space-y-2">
                                            <li class="flex items-center gap-2 flex-wrap">were introduced to Australia from Hawaii in 1935 to eat a type of insect that was damaging the <input type="text" id="ielts-ans-35" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(35)"> plantations.</li>
                                            <li>failed to solve the problem and became widespread in the north of Australia.</li>
                                            <li>are poisonous for any species that eats them and reduce the food available for native frogs.</li>
                                        </ul>
                                    </li>
                                    <li>Japanese knotweed plants were popular among 19th-century gardeners in the UK.</li>
                                    <li class="flex items-center gap-2 flex-wrap">Rhododendron plants prevent <input type="text" id="ielts-ans-36" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(36)"> from reaching native plants.</li>
                                    <li class="flex items-center gap-2 flex-wrap">Grey squirrels from N. America reduce sources of food for the UK's native red squirrels and spread a <input type="text" id="ielts-ans-37" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(37)"> that kills red squirrels.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">Tackling invasive species</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap">Monitoring helps us to understand the <input type="text" id="ielts-ans-38" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(38)"> of invasive species and the impact they have.</li>
                                    <li class="flex items-center gap-2 flex-wrap">Setting up a national <input type="text" id="ielts-ans-39" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(39)"> makes it easier to track them.</li>
                                    <li class="flex items-center gap-2 flex-wrap">Asking the public to <input type="text" id="ielts-ans-40" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(40)"> and report them helps with monitoring.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                transcript: `
                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 1</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>TAMMY:</strong> You know when you went to the Shetland Islands last year, Paul? Did you go by ferry or did you fly?</p>
                        <p><strong>PAUL:</strong> We went by ferry, Tammy. I prefer driving to flying - the journey feels like part of the holiday.</p>
                        <p><strong>TAMMY:</strong> Mmm. Which ferry company did you use?</p>
                        <p><strong>PAUL:</strong> There's only one - <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q1</span>it's called Northern Ferries.</span> The ferries all leave from Aberdeen.</p>
                        <p><strong>TAMMY:</strong> How frequent are they?</p>
                        <p><strong>PAUL:</strong> The service is pretty limited - there's only one ferry leaving every evening in summer anyway, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q2</span>seven days a week</span> - I'm not sure about the winter months. They may only run on four or five days then.</p>
                        <p><strong>TAMMY:</strong> OK. So it's an overnight trip. I quite like that idea. Leaving at night and waking up as you arrive on the island. Can you remember how much you paid for your tickets?</p>
                        <p><strong>PAUL:</strong> They were really cheap and four people and a car <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q3</span>worked out at just under £250.</span></p>
                        <p><strong>TAMMY:</strong> Really? I was expecting it to be more like £400 during the peak season.</p>
                        <p><strong>PAUL:</strong> So was I. It's great value. It's a good idea to book in advance because I think they get booked up quite quickly - especially during the school holidays.</p>
                        <p><strong>TAMMY:</strong> Yes, I suppose so. I'm just not 100% sure of our plans yet. What if I had to cancel?</p>
                        <p><strong>PAUL:</strong> That could be a problem. I don't think it's their policy to give refunds - <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q4</span>just a voucher - which you can use at a later date.</span> But you have to cancel a month in advance to get that.</p>
                        <p><strong>TAMMY:</strong> Right. Well we need to make up our minds quickly then.</p>
                        <p><strong>PAUL:</strong> You'd want to book a cabin too. We <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q5</span>booked too late to get a cabin with a window.</span> They're more expensive but much nicer than the inner cabins. You don't have to book a cabin at all but I think it's worth paying for. They also have luxury cabins, which are only for two people and have a TV - but I wouldn't bother with those.</p>
                        <p><strong>TAMMY:</strong> No, I agree.</p>
                        <p><strong>PAUL:</strong> The only other thing I can think of is to make sure you bring snacks for the kids. The selection on board is quite limited and not that healthy either.</p>
                        <p><strong>TAMMY:</strong> Mmm. What about wifi on board? Is that any good?</p>
                        <p><strong>PAUL:</strong> Not really. So it's <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q6</span>best to bring some books for them.</span></p>
                        <p><strong>TAMMY:</strong> OK. We may need to bring the dog if I can't get anyone to look after him.</p>
                        <p><strong>PAUL:</strong> We brought ours and it was fine. The kennels on board are OK - they're quite big - <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>you just need to provide a blanket.</span></p>
                        <p><strong>TAMMY:</strong> Uhuh. Sounds good.</p>
                        <p><strong>PAUL:</strong> It was all very easy really - and it was quite an adventure for the kids. They loved being on the sea at night and <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q8</span>in the morning keeping a lookout for dolphins</span> - we saw loads.</p>
                        <p><strong>TAMMY:</strong> Oh, the kids would love that!</p>
                        <p><strong>PAUL:</strong> One other thing. We arrived in Aberdeen hours before the ferry was due to leave so we decided to go somewhere else rather than hang around at the port for so long.</p>
                        <p><strong>TAMMY:</strong> Where did you go?</p>
                        <p><strong>PAUL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q9</span>Drum Castle.</span></p>
                        <p><strong>TAMMY:</strong> I've never heard of it. Is that spelt like the instrument?</p>
                        <p><strong>PAUL:</strong> Yeah. It's really worth visiting. It's got an impressive tower and beautiful gardens and ancient woodland.</p>
                        <p><strong>TAMMY:</strong> Sounds lovely. Does it have a restaurant?</p>
                        <p><strong>PAUL:</strong> It's only got a coffee shop - no restaurant. We looked up restaurants in the area and <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>found an Italian one in a village nearby.</span> I can check the name of it for you if you're interested.</p>
                        <p><strong>TAMMY:</strong> Oh thanks Paul that would be....</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 2</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Good evening everyone. My name's Jon and I run Veg Out, a street food business selling vegan food. Since 2012 I've been travelling all around the country cooking vegan food in my converted van and selling it at all kinds of outdoor events. I'm here to give you some advice based on my experience.</p>
                        <p>The good news is that there's never been a better time to start your own street food business. Street food continues to grow in popularity. I think there are a couple of reasons for this. The first is that street food is a reaction against fast food. Street food ranges from high quality burgers to vegan curries and everything in between. But while fast food is cheap and easy to find, it's not particularly good for you. It's also the same everywhere. What you get with street food on the other hand is something different. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q11/12</span>People like the idea of trying something they can't get anywhere else. They also like seeing food prepared in front of them</span> and which hasn't come straight out of a freezer.</p>
                        <p>You need to think about the best place to sell your street food. People always think music festivals are an obvious place to start but the cost of renting a space can be huge. And there's always a lot of competition. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q13/14</span>Food markets, on the other hand, are great</span> because customers are always really interested in food and give great feedback. And if you can <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q13/14</span>get a spot in your local park</span> - fantastic. Usually very relaxed but with lots of customers passing by. Once you get established you'll start getting asked to do parties - which can be really challenging but lots of fun. Having street food at weddings has become quite fashionable too - but you need to really know what you're doing as everything needs to be perfect.</p>
                        <p>Setting up a street food business costs a lot less than opening a restaurant or café but you'll have to buy some basic equipment. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q15</span>I'd try to get things like hobs and fridges second hand if you can.</span> You can replace them with better quality stuff if your business takes off. Renting is another option but you'll end up spending more money rather than saving it.</p>
                        <p>You've probably got a good idea about the food you're planning to sell. I expect you've done some research to find out if anyone else is selling a similar product. And you'll have thought about any possible allergies to nuts or eggs etc. But there's one thing people don't always think about and that's how you're going to serve it. On a plate? In a bag? Will you provide a fork? Will it all be easily recyclable or reusable? <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q16</span>It's got to be easy to eat and look attractive</span> or customers won't come back.</p>
                        <p>Once you get started, you should be prepared for things to go wrong. Every business faces problems and here are a few examples from street food businesses that I know.</p>
                        <p>My friends who run Thai Basil started by juggling their street food business with their day jobs in a restaurant. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q17</span>Their work-life balance was non-existent</span> as they were working til midnight in the restaurant all week and then took their food truck to markets on their days off.</p>
                        <p>The owners of Basque found it was hard to make a profit because the <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q18</span>price of fish - essential for some of their dishes - was so high.</span> And it was hard to charge customers a lot more for those dishes. So they had to stop focussing on fish dishes and include more vegetarian food.</p>
                        <p>The owners of Lou's kitchen were making salads to order from their van and some of their dishes were quite complicated. At one of their first events they ended up with people <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q19</span>standing in a long queue for more than 15 minutes</span> - and many of them lost patience. So make sure whatever you offer can be served quickly and efficiently.</p>
                        <p>The owners of Chip Chop had found a perfect venue near a beach where there weren't any other street food trucks. But what they hadn't realised was that <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q20</span>they'd need a special licence</span> - which individual businesses don't need at markets or festivals. It was a complicated process and in the end they gave up.</p>
                        <p>So I hope that's given you a flavour of ....</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 3</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>MADDY:</strong> Shall we go through our research for our sustainable fashion project?</p>
                        <p><strong>RYAN:</strong> Good idea. I think I've done enough reading now.</p>
                        <p><strong>MADDY:</strong> Me too. I've learnt such a lot about what sustainability actually means.</p>
                        <p><strong>RYAN:</strong> Mmm, same for me with ethical fashion. I didn't really appreciate the difference between that and sustainable fashion before doing this research.</p>
                        <p><strong>MADDY:</strong> I know - <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>most people use these terms interchangeably</span> - but in fact the difference is quite distinct when you think about it. Sustainable relates to the environment and ethical relates more to the way workers or animals are treated.</p>
                        <p><strong>RYAN:</strong> I totally understand why people get confused, though. There are so many other terms used - like 'eco-friendly', which is actually quite meaningless.</p>
                        <p><strong>MADDY:</strong> And the way companies use these terms when describing their products doesn't help. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>They're often deliberately vague, I think, and don't provide enough information</span> about how their products are made.</p>
                        <p><strong>RYAN:</strong> Yes.</p>
                        <p><strong>MADDY:</strong> It was interesting to read about the debates surrounding wool production and how ethical and sustainable that is. It's generally considered to be sustainable because it's a natural product.</p>
                        <p><strong>RYAN:</strong> And it also lasts a long time and can be recycled. All very positive. But I wasn't convinced by the argument that wool production is sustainable because it doesn't use many chemicals - <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>what about all the fungicides and insecticides used in sheep farming?</span></p>
                        <p><strong>MADDY:</strong> Good point. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>And I couldn't find any evidence for the claim about sheep farming being better for the environment than cattle farming.</span></p>
                        <p><strong>RYAN:</strong> No - they're both really bad. I read different reports about how unethical it is to even shear sheep. Some people say it's cruel but as long as the sheep are kept in good condition I can't see anything wrong with it.</p>
                        <p><strong>MADDY:</strong> Me neither.</p>
                        <p><strong>RYAN:</strong> Shall we talk about some of the semi-synthetic new fabrics now?</p>
                        <p><strong>MADDY:</strong> OK, let's do that.</p>
                        <p><strong>RYAN:</strong> Let's start with Lyocell, I've been reading about that.</p>
                        <p><strong>MADDY:</strong> Yeah, that's the one produced from the pulp of eucalyptus trees, isn't it?</p>
                        <p><strong>RYAN:</strong> Yes, and what happens with that is really impressive. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q25</span>Over 99% of dissolving agents used in the manufacturing process are used again.</span></p>
                        <p><strong>MADDY:</strong> Yeah. Now, there are a few semi-synthetic fabrics that I'd never heard of. Like Cupro, for example.</p>
                        <p><strong>RYAN:</strong> Made from byproducts of the cotton industry to create a kind of vegan silk. But I'm not sure how sustainable this really is as there are so many reports of pollution caused by the manufacturing process.</p>
                        <p><strong>MADDY:</strong> Mmm. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q26</span>It doesn't compare favourably with all the other sustainable fabrics we've looked at, no.</span></p>
                        <p><strong>RYAN:</strong> Bamboo is one fabric we're all familiar with. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q27</span>But I didn't know that it was only organic bamboo that's truly sustainable.</span></p>
                        <p><strong>MADDY:</strong> Me neither. Apparently, the manufacturing process for a significant proportion of bamboo is chemically quite intensive - which obviously can be quite damaging.</p>
                        <p><strong>RYAN:</strong> EcoVero is an example of a semi-synthetic fabric which is becoming really popular.</p>
                        <p><strong>MADDY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q28</span>Probably because manufacturing causes 50 percent fewer emissions and takes up half as much energy as conventional fabrics.</span> That saves production costs as well as being better for the environment.</p>
                        <p><strong>RYAN:</strong> That's true. I think demand for cork will continue to grow. It works really well in vegan shoes and bags.</p>
                        <p><strong>MADDY:</strong> Mmm and <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>it's the only fabric that's fundamentally sustainable - the cork trees it comes from are renewable and the product itself is both recyclable and biodegradable</span> - which is unique.</p>
                        <p><strong>RYAN:</strong> And the harvesting process is actually good for the trees. There are no downsides to using this source at all.</p>
                        <p><strong>MADDY:</strong> Hemp is another really good sustainable fabric from a natural source.</p>
                        <p><strong>RYAN:</strong> Yes. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>Did you know that clothes made from hemp protect the wearer from the sun and it's also antibacterial?</span></p>
                        <p><strong>MADDY:</strong> No, I didn't. But I did read that it's quite hard to grow, so perhaps that's why it's not as common as you'd think.</p>
                        <p><strong>RYAN:</strong> I'm sure that'll change.</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 4</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Today I'm going to talk about invasive species. Let me start by saying what an invasive species is and what it's not. Invasive species are any animal or plant that is introduced into an environment by humans, and which is then harmful to that environment. It's important to be clear that not all introduced species are invasive. Many introduced or non-native - species thrive in new areas without posing any threat.</p>
                        <p>In some cases, invasive species have changed the natural world beyond recognition, so let's look at the different ways they can be problematic. First of all, invasive species may eat native species, or sometimes they may <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q31</span>bring a disease with them</span>, which native species have never faced before and therefore have no defences against. Often the invasive species breed very quickly - which further adds to the problem of native species losing their sources of food. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q32</span>Species invasions are one of the biggest causes of damage in an ecosystem, actually putting its survival at risk.</span></p>
                        <p>So, how do invasive species spread? Without a doubt, the biggest cause is human activity. This could be intentional, or it could be accidental, such as <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q33</span>when people who've been on holiday in another country</span> come back with, say, the seeds of plants on their clothes or shoes. Plants and animals, especially insects, arrive in or on the cargo of ships, and then escape into their new 'home'. But sometimes humans deliberately move animals and plants around the world, for example to use them to control pests on farms, <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q34</span>or to be pets.</span> This can go very wrong if those animals and plants move into wild settings and start breeding or begin growing in ways that weren't predicted.</p>
                        <p>Let's now look at an example of an invasive species here in Australia: Rhinella marina is a species of toad that was deliberately introduced from Hawaii in 1935 as a form of biological control. It was hoped that the toads would eat the grey-backed beetles responsible for <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q35</span>destroying crops of sugar on many of the plantations.</span> At first, just a handful of toads were released by scientists into Queensland, but this number soon grew as other states followed suit. Within two years, 62,000 young toads had been released into the wild. The toads did nothing to protect the plantations, but they did reproduce rapidly and could soon be found all over the northern half of the country. The toads are poisonous at every stage of their life cycle, and anything that eats them will die.</p>
                        <p>My second example regarding invasive species is the United Kingdom. Actually, there are more than three-thousand invasive species there, including some that are extremely common. Some invasive plants, such as Japanese knotweed, have had a devastating impact on parts of the UK. Gardeners in the nineteenth century considered it a beautiful ornamental plant - which it is, when it's kept under control - but it soon spread into the countryside and remains a problem even to this day as it's so hard to eradicate. Another invasive plant is rhododendrons, which can be found in UK parks and woodlands. Their introduction dates back to 1763, but they're now seen as harmful because they <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q36</span>block out so much light that native wild flowers can't grow</span> beneath them.</p>
                        <p>And then there are grey squirrels, which are one invasive species almost everyone in the UK will have come across. They were brought to the UK from North America and introduced to private estates around the 1870s but are now found everywhere, from forests to city squares. Grey squirrels have outcompeted the smaller, native red squirrels. They both eat the same food, and the grey squirrels <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q37</span>carry a type of virus that is deadly</span> to the red squirrels. Red squirrel populations have collapsed, and there are only a handful of sites left in the UK where they're found.</p>
                        <p>An important question for ecologists worldwide is, what can we do to tackle the problem of invasive species? The first step in controlling invasive species is <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q38</span>learning about the behaviour of new species</span> coming into the country. Monitoring is an important part of this, so that we can know if the new species begins to have a negative impact in its new environment. One effective way to keep track of invasive species is to <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q39</span>create a database for the whole country.</span> That way, all relevant authorities and agencies can share important information and take whatever action's needed. But the public also have a vital role to play in this process. They should be <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q40</span>encouraged to photograph harmful species</span> - because this helps with identification - and then to report when and where these were observed. But it's important to tell people not to destroy or even touch what they've found.</p>
                        <p>Now, I'm going to move on to</p>
                    </div>
                `
            },
            "Cambridge 21 - Listening Test 1": {
                answers: {
                    1: "10", 2: "weather", 3: "safety", 4: "discount", 5: "dictionary",
                    6: "certificate", 7: "towel", 8: "cafe", 9: "videos", 10: "lockers",
                    11: "A", 12: "B", 13: "A", 14: "A", 15: "A", 16: "C",
                    17: "C", 18: "A", 19: "B", 20: "C",
                    21: ["B", "D"], 22: ["B", "D"], 23: ["C", "E"], 24: ["C", "E"],
                    25: "G", 26: "B", 27: "F", 28: "H", 29: "A", 30: "E",
                    31: "metal", 32: "slow", 33: "demand", 34: "equator", 35: "recycle", 
                    36: "fungus", 37: "weather", 38: "strong", 39: "roots", 40: "soil"
                },
                audio: {
                    1: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-1.mp3",
                    2: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-2.mp3",
                    3: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-3.mp3",
                    4: "https://engnovate.com/wp-content/uploads/2026/06/cambridge-ielts-21-academic-listening-test-1-4.mp3"
                },
                content: {
                    1: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 1: Questions 1-10</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Questions 1-6: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600 mb-6 overflow-x-auto">
                            <table class="w-full text-left text-gray-800 dark:text-gray-200 min-w-[600px]">
                                <thead>
                                    <tr class="border-b-2 border-gray-300 dark:border-slate-500">
                                        <th class="py-2 pr-4 font-bold">Name of course</th>
                                        <th class="py-2 pr-4 font-bold">What you learn</th>
                                        <th class="py-2 pr-4 font-bold">Cost</th>
                                        <th class="py-2 font-bold">Other information</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-slate-600">
                                    <tr>
                                        <td class="py-3 pr-4 font-bold">Taster day</td>
                                        <td class="py-3 pr-4">introduction to sailing</td>
                                        <td class="py-3 pr-4">£120 if booking one place</td>
                                        <td class="py-3">small groups (max <input type="text" id="ielts-ans-1" class="border-b-2 border-gray-400 bg-transparent w-16 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(1)"> people)</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4 font-bold" rowspan="2">Level 1</td>
                                        <td class="py-3 pr-4">basic theory e.g. understanding the <input type="text" id="ielts-ans-2" class="border-b-2 border-gray-400 bg-transparent w-24 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(2)"> and tides</td>
                                        <td class="py-3 pr-4">£200</td>
                                        <td class="py-3"><input type="text" id="ielts-ans-4" class="border-b-2 border-gray-400 bg-transparent w-24 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(4)"> available for club members</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 pr-4">basic sailing skills including <input type="text" id="ielts-ans-3" class="border-b-2 border-gray-400 bg-transparent w-24 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(3)"></td>
                                        <td class="py-3 pr-4">all inclusive (plus a useful <input type="text" id="ielts-ans-5" class="border-b-2 border-gray-400 bg-transparent w-24 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(5)">)</td>
                                        <td class="py-3"><input type="text" id="ielts-ans-6" class="border-b-2 border-gray-400 bg-transparent w-24 px-1 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(6)"> at the end of the course for all participants</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Questions 7-10: Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                            <h5 class="font-bold text-lg mb-4 dark:text-white">General information</h5>
                            <ul class="list-disc pl-5 space-y-4 text-gray-800 dark:text-gray-200">
                                <li>Participants must be able to swim.</li>
                                <li class="flex items-center gap-2 flex-wrap">Bring suitable clothing, a <input type="text" id="ielts-ans-7" class="border-b-2 border-gray-400 bg-transparent w-28 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(7)"> and toiletries (e.g. shampoo).</li>
                                <li class="flex items-center gap-2 flex-wrap">There is a <input type="text" id="ielts-ans-8" class="border-b-2 border-gray-400 bg-transparent w-28 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(8)"> at the club.</li>
                                <li class="flex items-center gap-2 flex-wrap">Online training <input type="text" id="ielts-ans-9" class="border-b-2 border-gray-400 bg-transparent w-28 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(9)"> are recommended.</li>
                                <li class="flex items-center gap-2 flex-wrap"><input type="text" id="ielts-ans-10" class="border-b-2 border-gray-400 bg-transparent w-28 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(10)"> are available for course participants.</li>
                            </ul>
                        </div>
                    `,
                    2: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 2: Questions 11-20</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 11-16: Choose the correct letter, A, B or C.</p>
                        <div class="space-y-6 mb-8 dark:text-white">
                            <div id="q11-container">
                                <p class="font-semibold mb-2">11. What should trainees always expect to get when working on low budget short films?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-11">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q11" value="A"> A. travel expenses</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q11" value="B"> B. a minimum wage</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q11" value="C"> C. meals</label>
                                </div>
                            </div>
                            <div id="q12-container">
                                <p class="font-semibold mb-2">12. According to the speaker, on big budget films trainees may get experience of</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-12">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q12" value="A"> A. makeup for special effects.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q12" value="B"> B. working with different ethnicities.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q12" value="C"> C. creating a variety of hair styles.</label>
                                </div>
                            </div>
                            <div id="q13-container">
                                <p class="font-semibold mb-2">13. The speaker says a problem for makeup artists is</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-13">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q13" value="A"> A. dealing with difficult directors.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q13" value="B"> B. being shouted at by their supervisor.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q13" value="C"> C. waiting around for hours doing nothing.</label>
                                </div>
                            </div>
                            <div id="q14-container">
                                <p class="font-semibold mb-2">14. How did the speaker feel when she met famous actors for the first time?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-14">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q14" value="A"> A. very shy</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q14" value="B"> B. very proud</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q14" value="C"> C. very disappointed</label>
                                </div>
                            </div>
                            <div id="q15-container">
                                <p class="font-semibold mb-2">15. What advice does the speaker give about makeup kits?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-15">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="A"> A. Always carry a basic kit with you.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="B"> B. Only buy the best products for a makeup kit.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q15" value="C"> C. Ask other makeup artists to check your kit.</label>
                                </div>
                            </div>
                            <div id="q16-container">
                                <p class="font-semibold mb-2">16. What advice does the speaker give about creating a portfolio?</p>
                                <div class="ml-4 space-y-1" id="ielts-rad-16">
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="A"> A. Keep print and digital photos.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="B"> B. Only include a small selection of photos.</label>
                                    <label class="block cursor-pointer hover:text-cyan-500"><input type="radio" name="q16" value="C"> C. Get permission to use photos.</label>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 17-20: What ability is required for each of the following duties?</p>
                        <p class="text-gray-500 italic mb-4">Write the correct letter, A, B, or C, next to Questions 17-20.</p>
                        <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                            <ul class="flex flex-col md:flex-row gap-4 md:gap-8 justify-center font-bold">
                                <li>A. being well-organised</li>
                                <li>B. being flexible</li>
                                <li>C. working quickly</li>
                            </ul>
                        </div>
                        <div class="space-y-3 dark:text-white">
                            <p class="flex items-center gap-3">17. Prepping an actor <input type="text" id="ielts-ans-17" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">18. Continuity <input type="text" id="ielts-ans-18" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">19. General <input type="text" id="ielts-ans-19" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">20. Applying makeup <input type="text" id="ielts-ans-20" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                        </div>
                    `,
                    3: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 3: Questions 21-30</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 21-22: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO features of the lecture on ocean biodiversity had the greatest impact on the students?</p>
                        <div class="space-y-2 mb-6 ml-4" id="ielts-mcq-21-22">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. the references to local problems</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. the broad focus of the examples</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. the practical suggestions for solutions</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. the type of issues discussed</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. the implications for government policy</label>
                        </div>
                        
                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 23-24: Choose TWO letters, A-E.</p>
                        <p class="mb-2 dark:text-white">Which TWO details about the research project particularly impressed the students?</p>
                        <div class="space-y-2 mb-8 ml-4" id="ielts-mcq-23-24">
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="A" class="form-checkbox text-cyan-500 w-5 h-5"> A. the team's previous successes</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="B" class="form-checkbox text-cyan-500 w-5 h-5"> B. its wide geographical scale</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="C" class="form-checkbox text-cyan-500 w-5 h-5"> C. the use of new technology</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="D" class="form-checkbox text-cyan-500 w-5 h-5"> D. the extensive statistical evidence</label>
                            <label class="flex items-center gap-2 dark:text-gray-300"><input type="checkbox" value="E" class="form-checkbox text-cyan-500 w-5 h-5"> E. the large range of specialists involved</label>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 mb-2 font-bold italic">Questions 25-30: What is the students' opinion of each of the following resources related to ocean biodiversity?</p>
                        <p class="text-gray-500 italic mb-4">Choose SIX answers from the box and write the correct letter, A-H, next to Questions 25-30.</p>
                        <div class="bg-gray-100 dark:bg-slate-700 p-4 rounded-xl mb-6 shadow-inner text-sm dark:text-gray-200">
                            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <li><strong>A.</strong> This is aimed at a very specialist audience.</li><li><strong>B.</strong> This is now rather outdated.</li>
                                <li><strong>C.</strong> This was an effective description of a new danger.</li><li><strong>D.</strong> This suggests possible ways to improve the situation.</li>
                                <li><strong>E.</strong> This does not give a balanced account.</li><li><strong>F.</strong> This is too predictable to be useful.</li>
                                <li><strong>G.</strong> This gives insufficient evidence for its claims.</li><li><strong>H.</strong> This gives a clear explanation of the problems.</li>
                            </ul>
                        </div>
                        <div class="space-y-3 dark:text-white">
                            <p class="flex items-center gap-3">25. Article on invasive lionfish <input type="text" id="ielts-ans-25" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">26. Documentary on microplastics <input type="text" id="ielts-ans-26" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">27. Podcast on ocean pollution <input type="text" id="ielts-ans-27" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">28. Book on coastal ecosystems <input type="text" id="ielts-ans-28" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">29. Article on metal toxicity <input type="text" id="ielts-ans-29" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                            <p class="flex items-center gap-3">30. Podcast on floating marine cities <input type="text" id="ielts-ans-30" class="border-b-2 border-gray-400 bg-transparent w-16 px-2 text-center uppercase focus:outline-none focus:border-cyan-500 font-bold text-cyan-700 dark:text-cyan-300" maxlength="1"></p>
                        </div>
                    `,
                    4: `
                        <h4 class="font-bold text-xl mb-4 text-cyan-800 dark:text-cyan-300">PART 4: Questions 31-40</h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-4 font-bold italic">Complete the notes below. Write ONE WORD ONLY for each answer.</p>
                        <div class="bg-gray-50 dark:bg-slate-700/50 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
                            <h5 class="font-bold text-lg mb-4 dark:text-white">Sources of rubber</h5>
                            <div class="space-y-4 text-gray-800 dark:text-gray-200">
                                <p class="mb-2">Three resources which are essential for industrial civilisation</p>
                                <ul class="list-disc pl-5 space-y-2">
                                    <li><input type="text" id="ielts-ans-31" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(31)"></li>
                                    <li>fossil fuels</li>
                                    <li>rubber</li>
                                </ul>
                                
                                <h6 class="font-bold mt-6 underline">Natural rubber</h6>
                                <p class="mb-2">This mainly comes from the Pará rubber tree, now cultivated in South-East Asia. The supply is limited because</p>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap">the growth of the tree is <input type="text" id="ielts-ans-32" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(32)">.</li>
                                    <li class="flex items-center gap-2 flex-wrap">production cannot easily be adjusted because of increasing or decreasing <input type="text" id="ielts-ans-33" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(33)">.</li>
                                    <li class="flex items-center gap-2 flex-wrap">the tree only grows near the <input type="text" id="ielts-ans-34" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(34)">.</li>
                                    <li>extracting the latex (rubber) is labour-intensive</li>
                                    <li class="flex items-center gap-2 flex-wrap">it is very difficult to <input type="text" id="ielts-ans-35" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(35)"> rubber after production.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">New threats include</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap">lack of genetic diversity, leading to danger of disease caused by a <input type="text" id="ielts-ans-36" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(36)">.</li>
                                    <li>a shift to the cultivation of palm oil</li>
                                    <li class="flex items-center gap-2 flex-wrap">extreme <input type="text" id="ielts-ans-37" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(37)"> events.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">Synthetic rubber</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li>may be used for engine parts and cooking utensils</li>
                                    <li class="flex items-center gap-2 flex-wrap">is less <input type="text" id="ielts-ans-38" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(38)"> than natural rubber</li>
                                    <li>is unsuitable for many purposes e.g. the tyres of aircraft.</li>
                                </ul>

                                <h6 class="font-bold mt-6 underline">An alternative source of natural rubber</h6>
                                <ul class="list-disc pl-5 space-y-3">
                                    <li class="flex items-center gap-2 flex-wrap">A wild flower (a type of dandelion) has rubber in its <input type="text" id="ielts-ans-39" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(39)">.</li>
                                    <li class="flex items-center gap-2 flex-wrap">It can be grown in many locations and does not require good <input type="text" id="ielts-ans-40" class="border-b-2 border-gray-400 bg-transparent w-32 px-2 focus:outline-none focus:border-cyan-500 text-center font-bold text-cyan-700 dark:text-cyan-300" placeholder="(40)">.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                transcript: `
                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 1</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>WOMAN:</strong> Hello, Oyster Bay Sailing Club. How can I help you?</p>
                        <p><strong>MAN:</strong> Oh hi. I'd like to find out about sailing courses for beginners.</p>
                        <p><strong>WOMAN:</strong> No problem. Is it for yourself?</p>
                        <p><strong>MAN:</strong> Yes. I had a look online but I'm not sure which course would be best.</p>
                        <p><strong>WOMAN:</strong> OK. Well you might be interested in our Taster Days?</p>
                        <p><strong>MAN:</strong> Possibly.</p>
                        <p><strong>WOMAN:</strong> So these are for people who've never sailed before - it's basically an introduction to sailing to find out whether you enjoy it and want to carry on with it.</p>
                        <p><strong>MAN:</strong> And how much is that?</p>
                        <p><strong>WOMAN:</strong> It's £120 for the day - but it's reduced to £110 each if there are two of you.</p>
                        <p><strong>MAN:</strong> No, it would just be me.</p>
                        <p><strong>WOMAN:</strong> Oh that's fine. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q1</span>You'd be in a small group, usually about eight people but no more than ten</span> - and everyone's always very friendly.</p>
                        <p><strong>MAN:</strong> Uh huh. And are there any other suitable courses?</p>
                        <p><strong>WOMAN:</strong> The other option is the Level 1 course. These are two-day weekend courses and we run those all year round.</p>
                        <p><strong>MAN:</strong> OK. And what do you learn on that course?</p>
                        <p><strong>WOMAN:</strong> This is a mix of theory and practical skills. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q2</span>So you learn about things like the weather</span>, which is obviously really important and also the tides, as well as learning basic sailing skills. You go out into the harbour in special training dinghies for beginners, two people in each dinghy and an instructor. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q3</span>He or she will make sure you understand everything you need to know about safety.</span></p>
                        <p><strong>MAN:</strong> It sounds like hard work!</p>
                        <p><strong>WOMAN:</strong> Yes, but you'll have a lot of fun too.</p>
                        <p><strong>MAN:</strong> And the cost of that one is ... ?</p>
                        <p><strong>WOMAN:</strong> £200. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q4</span>But it's a bit cheaper if you decide to join the club. There's a discount for members.</span></p>
                        <p><strong>MAN:</strong> Well, I'm not sure about that yet.</p>
                        <p><strong>WOMAN:</strong> You've got plenty of time to decide.</p>
                        <p><strong>MAN:</strong> And does the cost include everything?</p>
                        <p><strong>WOMAN:</strong> Yes, everything's included and <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q5</span>you also get a really good dictionary</span> explaining all the sailing terminology. A lot of people struggle with this at first. It's got lots of pictures, so I'm sure you'd find it really helpful. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q6</span>And on completion of the course you get a certificate.</span> Then you're ready to move on to the Level 2 course.</p>
                        <p><strong>MAN:</strong> Sounds good.</p>
                        <p><strong>WOMAN:</strong> I think that's all the info you need for now. Just a couple of general things. For example, it's really important that you know how to swim.</p>
                        <p><strong>MAN:</strong> Yes, I'm pretty confident in the water.</p>
                        <p><strong>WOMAN:</strong> Great. The other thing I should tell you is that we provide wetsuits and life jackets but you need to bring swimming trunks and some old trainers.</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>And a towel?</span></p>
                        <p><strong>WOMAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q7</span>Yes definitely.</span> And you might want to bring your own toiletries, things like shampoo.</p>
                        <p><strong>MAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q8</span>OK. What about food and drink? Do I need to bring that or is there a café at the club?</span></p>
                        <p><strong>WOMAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q8</span>Yes, you can get sandwiches, cakes and snacks there.</span> The food's pretty reasonable.</p>
                        <p><strong>MAN:</strong> OK good. Well I think I'm interested in the Level 1 course. But I know absolutely nothing about sailing so is there anything I can do to prepare myself a bit?</p>
                        <p><strong>WOMAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q9</span>I recommend you watch some videos we use for training.</span> They're available online. I can send you the link. They'll give you an idea of what to expect.</p>
                        <p><strong>MAN:</strong> Perfect, thanks. That would be very helpful. Oh and just one other thing - I'll be cycling to the club and will need somewhere to put valuables. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>I'm just wondering if there are lockers for people to use?</span></p>
                        <p><strong>WOMAN:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q10</span>Yes, there are plenty in the changing rooms.</span></p>
                        <p><strong>MAN:</strong> Great. OK well could you book me onto...</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 2</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>MAN:</strong> Hello and welcome to the film making podcast. In this week's episode, Claire Lemarre talks to us about how to become a makeup artist. Claire's been working as a makeup artist in the film industry for over 20 years and has lots of useful advice about how to get started.</p>
                        <p><strong>WOMAN:</strong> Thanks lan. Well, before you can become a makeup artist on films you have to spend about 2 years working as a makeup trainee.</p>
                        <p>A good place to get your first job would be on a low budget short film. Of course, this means that you'll be working for free. But it's often worth it for the experience. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q11</span>Make sure your transport costs are covered</span> - and remember, there's very unlikely to be any catering provided, so bring plenty of food.</p>
                        <p>If you're lucky, you might start out on a big budget film where you'll get the most useful experience. On productions like this, makeup and hair styling are separate departments - so you won't need to bring your curling tongs! <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q12</span>But you're likely to get the opportunity to work with a range of age groups, as well as different ethnicities.</span> Doing makeup for special effects is highly specialised, so don't expect to be offered any practical experience in that.</p>
                        <p>One problem with working in the makeup department is that it's a high-pressure environment. There are very few times when you'll be bored or have nothing to do. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q13</span>It can be stressful but you'll see that the top makeup artists are very professional - even when they're having to work with directors who are impatient, or unhappy with the makeup artist's work.</span> Follow your supervisor's lead and try to remain calm at all times.</p>
                        <p>I've worked with many very famous actors over the years. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q14</span>At first, I found it overwhelming and could hardly speak. I was so in awe.</span> That's preferable, by the way, to becoming too excited and asking for selfies. Now meeting the talent is just a normal part of the job and to be honest most actors don't look that special without all the makeup!</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q15</span>Every makeup trainee will need a makeup kit, which they'll be expected to have with them at all times. Just the essentials will do for the kinds of tasks you'll be given - it won't be anything complicated.</span> It's worth looking at what the other makeup artists have in their kits - but whatever you do, don't borrow anything without asking first.</p>
                        <p>It's very important to build your portfolio. You should take photos of all the work you do and ideally show the different stages of makeup application if you can. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q16</span>But remember you'll need to get approval from the makeup designer in charge of the department.</span> As you'll be sending your portfolio digitally, you won't need to get photos printed.</p>
                        <p>So what does a makeup trainee actually do? You need to think about whether you're the right kind of person to do the job and whether you'd enjoy it. So, to give you some idea, here are some of the things you might be required to do.</p>
                        <p>You may be asked to help prep an actor ready for makeup. Some actors will arrive having already cleansed and moisturized their skin. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q17</span>But sometimes you'll need to step in and get this done without wasting any time</span>, otherwise the makeup artist will get behind schedule.</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q18</span>Trainees play a useful role in continuity. It will be your responsibility to take photos, log them digitally and print out a hard copy to put in each actor's file. This information needs to be kept in good order</span> as a reshoot can mean replicating makeup months later.</p>
                        <p><span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q19</span>General duties mean doing anything from getting the teas and coffees to putting on a wash. Having a positive attitude and being willing to do whatever is asked of you will help you get your next film job.</span></p>
                        <p>You won't be asked to apply makeup to any of the principal cast, only the extras. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q20</span>If there are dozens of extras involved you'll need to keep up a swift pace</span> and not spend too long on each person. It takes quite a lot of confidence to be able to do this well.</p>
                        <p>OK now about terms and conditions....</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 3</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p><strong>PHIL:</strong> That lecture from the visiting speaker yesterday was good, wasn't it?</p>
                        <p><strong>LUCY:</strong> Yeah, I learned a lot from her about ocean biodiversity. I've already done some reading on it, and I did an assignment on some of the problems associated with it last year, but I especially liked the way her lecture focused on more long-term issues.</p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>Yes, things that aren't currently receiving widespread attention but are likely to be important in the future. That impressed me too.</span> It wasn't exactly a feel-good conclusion because it's hard to see any real solution for a lot of the problems.</p>
                        <p><strong>LUCY:</strong> No, though she did point to where policy changes could be made to protect our marine and coastal environments.</p>
                        <p><strong>PHIL:</strong> Mm. But that's just at a national level. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>The examples she gave were at a more global level, and they really made it clear to me just how wide-ranging the threats to ocean biodiversity are.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q21/22</span>Yes, me too.</span></p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>The research project she described was impressive, wasn't it? I'd have thought it was quite unusual to have so many experts working together.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>Yeah, and from such different backgrounds.</span> Must have been a really exciting team to work with. I'd heard of a couple of them before they were involved in research way back in 2009 warning about the dangers of ocean pollution.</p>
                        <p><strong>PHIL:</strong> But now people are much more aware of that, aren't they?</p>
                        <p><strong>LUCY:</strong> I suppose so.</p>
                        <p><strong>PHIL:</strong> Another thing about the research is that the team members came from all round the world. Though I suppose that's not unusual nowadays, now everyone can work remotely.</p>
                        <p><strong>LUCY:</strong> Right. I liked the way she didn't bombard us with figures - I mean, they were available, but she focused more on the general points they indicated.</p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>Mm. And the description of improvements in systems used for tracking marine animals and things like robots were really interesting.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q23/24</span>Yes, and her description of how robotics can be used to investigate threats to biodiversity.</span></p>
                        <p><strong>PHIL:</strong> Absolutely.</p>
                        <p><strong>PHIL:</strong> While you're here, can we talk about the list of resources we have to evaluate for the seminar tomorrow. I've had a look at them all, but it's been a bit of a rush.</p>
                        <p><strong>LUCY:</strong> Yeah. What did you think of that article on invasive lionfish? The one claiming they were expanding their habitat throughout the Mediterranean Sea.</p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q25</span>Well, the writer went on about how dangerous they were in environmental terms, which is probably true, but he didn't really provide much information to explain why.</span></p>
                        <p><strong>LUCY:</strong> I know what you mean.</p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q26</span>I watched the documentary on microplastics, at least I started to, but then I found it was made ten years ago so I gave up.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q26</span>I watched to the end but you're right, it was showing its age.</span> People had hardly heard of microplastics then, whereas now everyone knows about them and how dangerous they are.</p>
                        <p><strong>PHIL:</strong> Yeah. Did you listen to the podcast on ocean pollution?</p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q27</span>Mm. I didn't get anything out of it though. Most of it was stating the obvious.</span></p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q27</span>Yes, it mentioned pesticides and plastic and things, and it clearly made the point that they were a bad thing, but everybody knows that anyway.</span> Did you read that book on coastal ecosystems?</p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q28</span>The one by John Harper? Yes, I found it hard going at first, it went into a lot of detail about things like the effects of offshore windfarms and fish farms, but actually I ended up with a much better understanding of the issues.</span></p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q28</span>Yes, I agree and I thought it was a well-written summary of those. And the diagrams helped a lot too.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>The article on metal toxicity was way above my head, I didn't know anything about how metals from industrial emissions react in the ocean... and I still don't understand it.</span></p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q29</span>I gave up reading after the first chapter - I just couldn't follow it.</span></p>
                        <p><strong>LUCY:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>That podcast on floating marine cities was interesting, though it presented a rather one-sided picture, I thought.</span></p>
                        <p><strong>PHIL:</strong> <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q30</span>Yes, it focused on how this would benefit people and ignored the effects on the environment.</span></p>
                        <p><strong>LUCY:</strong> But anyway, shall we ...</p>
                    </div>

                    <h5 class="font-bold text-2xl mb-4 text-cyan-700 dark:text-cyan-400 border-b pb-2">Part 4</h5>
                    <div class="space-y-4 text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
                        <p>Much of the world now lives in an industrial civilisation. But this has only become possible because we have the necessary natural resources. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q31</span>There are three types of natural resource without which industry could not exist. One of these is metal</span> - without that we'd have no machines and no transportation. Another is fossil fuels, which we need to power those machines. But there's a third resource that's essential to connect the different parts of a machine together with belts and pipes and shock absorbers, and that is rubber. It's now used in over 40,000 products, from waterproof footwear to surgical gloves.</p>
                        <p>At present, we have two types of rubber in common use. One is natural rubber, which nearly all comes from the Pará rubber tree. This was originally native to Brazil, but is now cultivated on plantations in South-East Asia. Recently, however, concern's been growing that supplies may soon be insufficient for the world's needs. So what exactly is limiting the supply of natural rubber?</p>
                        <p>Well, for one thing, rubber trees don't just spring up overnight. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q32</span>It can take eight to ten years for a tree to start producing rubber, so cultivating them's a slow process.</span> And this leads to another problem. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q33</span>With most crops, farmers don't have to think very far ahead, so they can easily change what crop they produce, or how much of a crop they produce, if they find the demand for that crop is rising or falling.</span> But if you have to plant eight or ten years ahead, that's much harder. And also the rubber tree's very choosy about where it grows. It needs the right temperature, the right amount of rainfall, and the right altitude - not too high and not too low. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q34</span>The result is that it can't be grown in the northern or southern parts of the globe, only around the equator.</span></p>
                        <p>Another problem is that the rubber is basically extracted in the same way as it's been done for hundreds of years, and that's by hand, by making small cuts in the trunk of the tree, and putting a little cup there to catch the latex, as the rubber is called. It's very labour-intensive. And it's not just the initial production that's limiting supplies. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q35</span>With other resources such as water and glass, when we've finished using them we can recycle them, but although this is also possible with rubber, it's very difficult</span>, so that also reduces the amount we have available.</p>
                        <p>And in the last few years, there have been new threats to the supply of natural rubber. One problem is linked to the fact that nearly all the rubber trees in South-East Asia are descended from just a small number of seeds brought from Brazil in the nineteenth century. This means that there's very little genetic diversity among the trees, which in turn makes them very vulnerable to disease. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q36</span>The most dangerous threat is a fungus, which destroyed large numbers of rubber trees in Brazil, and which could cause devastation to plantations worldwide.</span> Another problem is that farmers in South-East Asia are increasingly turning to the cultivation of palm oil, which is easier and more profitable for them. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q37</span>And finally, in recent years South-East Asia, like other parts of the world, has been repeatedly hit by extreme types of weather, and this looks likely to continue in the future.</span></p>
                        <p>However, as well as using natural rubber, it's also possible to make rubber synthetically. This works very well for some purposes, for example, making engine parts, or silicone pots and pans used for cooking. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q38</span>But compared with natural rubber, it's not anything like as strong, and this means it can't replace natural rubber in other products.</span> For example, while a mixture of natural rubber and synthetic rubber works well in car tyres, only natural rubber can stand up to the extreme speeds of aircraft tyres during take-off and landing.</p>
                        <p>So for some time, scientists have been looking for alternative sources of natural rubber. One that's been known about for some time seems initially to be a rather unlikely source. It's a wild plant with yellow flowers that we normally regard as a weed when we see it in our gardens. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q39</span>But when it's pulled up and its roots cut open, they're found to contain rubber.</span></p>
                        <p>Now, compared to the rubber tree, dandelions produce relatively small amounts of rubber, but unlike rubber trees, they're very adaptable. <span class="bg-amber-200 dark:bg-amber-700/50 rounded px-1 transition-colors"><span class="bg-amber-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-sm mr-1">Q40</span>They'll grow in all sorts of places, and they don't need rich soil.</span> So at present there are several projects underway investigating the possibility of using dandelions as a source of rubber.</p>
                        <p>Another possibility is a desert shrub grown in Mexico and Texas...</p>
                    </div>
                `
            },
        };
