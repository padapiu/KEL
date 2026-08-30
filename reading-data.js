// Khởi tạo đối tượng toàn cục để lưu trữ toàn bộ đề thi Reading
window.ieltsReadingDatabase = {
    "Cambridge 21 - Reading Test 4": {
        passages: {
            1: {
                title: "The problems and benefits created by the spread of the water hyacinth in Kenya",
                content: `<p class="mb-4">Water hyacinth (Eichhornia crassipes), an aquatic plant native to South America, first appeared in countries in Africa in the early 1900s. Scientists there called it the 'world's worst aquatic weed', after it spread from the southernmost tip of Africa in the early 1900s and started obstructing major dams and rivers.</p>
                <p class="mb-4">In east Africa the plant arrived with Belgian colonists in Rwanda, who liked the look of its glossy leaves and delicate purple flowers floating in their ponds. But by the 1980s, it had 'escaped' out of the country via the Kagera river and made its way downstream to Lake Victoria.</p>
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
        },
        answers: {
            1: "TRUE", 2: "FALSE", 3: "TRUE", 4: "NOT GIVEN", 5: "NOT GIVEN", 6: "FALSE", 7: "TRUE",
            8: "cow dung", 9: "fermentation", 10: "pipes", 11: "time", 12: "money", 13: "price",
            14: "I", 15: "J", 16: "H", 17: "B", 18: "E", 19: "F",
            20: "NO", 21: "NOT GIVEN", 22: "YES", 23: "NO",
            24: "C", 25: "D", 26: "D",
            27: "G", 28: "J", 29: "I", 30: "C", 31: "A", 32: "E",
            33: "NO", 34: "NOT GIVEN", 35: "NOT GIVEN", 36: "YES",
            37: "B", 38: "C", 39: "D", 40: "A"
        },
        explanations: {
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
        }
    }
};
