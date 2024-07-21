export const careers = [
      {
        id: 1,
        name: "ui/ux design",
        typicalMajors: [
          "human computer interaction (hci)",
          "statistics/applied statistics",
          "computer science",
          "design"
        ],
        roles: [
          {
            title: "ux researcher",
            description: "ux researchers use both qualitative and quantitative research to understand user behaviors, needs, and motivations. their work allows companies and organizations to make decisions on design decisions for products and services.",
            dayToDay: [
              "testing different versions of products",
              "surveying users",
              "planning research projects",
              "presenting findings to designers/developers"
            ],
            relevantSkills: ["curiosity", "collaboration", "empathy", "communication"],
            averagePay: {us: "$78,000 - $136,000/yr", uk: null}
          },
          {
            title: "ui designer",
            description: "ui designers are responsible for all the screens and views that a user sees when playing a game, using an app, or going through a website. any movement or concept on the screen is designed by them.",
            dayToDay: [
              "working closely with ui researchers",
              "reviewing competitor platforms",
              "prototyping designs",
              "incorporating feedback from stakeholders"
            ],
            relevantSkills: ["visual design", "collaboration", "attention to detail", "technical frontend understanding (html, css, javascript, react, etc.)"],
            averagePay: {us: "$80,000 - $137,000/yr", uk: null}
          }
        ],
        notableWomen: [
          {name: "elizabeth churchill", title: "google ux lead"},
          {name: "alana washington", title: "rippling head of design"},
          {name: "efi chatzopoulou", title: "ux researcher"}
        ]
      },
      {
        id: 2,
        name: "software development",
        typicalMajors: [
          "computer science",
          "computer engineering",
          "data science",
          "information systems",
          "information technology",
          "mathematics"
        ],
        roles: [
          {
            title: "fullstack engineer",
            description: "fullstack engineers need to have a versatile understanding of both design and databases. they work on full applications, working with both frontend and backend development.",
            dayToDay: [
              "implementing ui designs",
              "collaborating with ui designers",
              "writing database queries",
              "deploying and configuring applications",
              "testing applications for quality"
            ],
            relevantSkills: ["problem solving", "documentation"],
            averagePay: {us: "$80,000 - $130,000/yr", uk: null}
          },
          {
            title: "web developer",
            description: "web developers work to create and maintain websites for clients or organizations. they debug code and ensure that the user experience of their websites is the best it can be.",
            dayToDay: [
              "coding and programming",
              "website maintenance",
              "debugging"
            ],
            relevantSkills: ["problem solving", "communication", "database management"],
            averagePay: {us: "$70,000 - $120,000/yr", uk: null}
          },
          {
            title: "mobile app engineer",
            description: "mobile app engineers work to take an app to market, either for apple or android devices. they work with ui engineers and other stakeholders to ensure that apps are optimized before publishing to the public.",
            dayToDay: [
              "developing apps",
              "integrating apis",
              "deploying app stores",
              "optimizing performance"
            ],
            relevantSkills: ["cross-platform expertise", "troubleshooting", "database management"],
            averagePay: {us: "$80,000 - $130,000/yr", uk: null}
          }
        ],
        notableWomen: [
          {name: "adda birnir", title: "ceo and co-founder of skillcrush"},
          {name: "sarah drasner", title: "google director of engineering"},
          {name: "sara soueidan", title: "award-winning front-end web developer, speaker, and author"},
          {name: "kate rotondo", title: "mobile developer and author of 'android development patterns'"},
          {name: "richa khandelwal", title: "senior ios engineer at pinterest"}
        ]
      },
      {
        id: 3,
        name: "quantitative finance",
        typicalMajors: ["computer science", "mathematics", "statistics"],
        roles: [
          {
            title: "quant researcher",
            description: "quant researchers use their strong mathematical and algorithm understanding to make predictions on the financial markets based on extensive research that they do.",
            dayToDay: [
              "analyzing data",
              "testing models",
              "developing algorithms",
              "researching the financial market"
            ],
            relevantSkills: ["strong statistics background", "mathematical modeling"],
            averagePay: {us: "$100,000 - $180,000/yr", uk: null}
          },
          {
            title: "quant trader",
            description: "quant traders apply their strong math skills with their strong understanding of financial markets in order to optimize trading algorithms and execute trades.",
            dayToDay: [
              "refining trading strategies",
              "analyzing markets",
              "executing trades"
            ],
            relevantSkills: ["statistical analysis", "mathematical modeling", "machine learning"],
            averagePay: {us: "$100,000 - $200,000/yr", uk: null}
          }
        ],
        notableWomen: [
          {name: "katya malinova", title: "notable quant researcher"},
          {name: "ruth porat", title: "alphabet inc. (google) cfo & morgan stanley former cfo"},
          {name: "irene aldridge", title: "ablemarkets managing director and quantitative portfolio manager"}
        ]
      },
      {
        id: 4,
        name: "cybersecurity",
        typicalMajors: ["cybersecurity", "computer science", "computer engineering"],
        roles: [
          {
            title: "security operations",
            description: "security operations center (soc) analysts monitor and respond to security incidents. they use various tools to detect, analyze, and mitigate threats. soc analysts often work in shifts to ensure 24/7 monitoring.",
            dayToDay: [
            ],
            relevantSkills: ["technical knowledge", "problem-solving", "communication"],
            averagePay: {us: "$85,000 - $110,000/yr", uk: null}
          },
          {
            title: "network security specialist",
            description: "network security specialists focus on protecting the integrity and availability of network infrastructure. they implement firewalls, vpns, and intrusion detection systems, and ensure secure network protocols.",
            dayToDay: [
            ],
            relevantSkills: ["technical knowledge", "problem-solving", "communication"],
            averagePay: {us: "$90,000 - $120,000/yr", uk: null}
          },
          {
            title: "computer forensics analyst",
            description: "computer forensic analysts investigate cybercrimes by collecting and analyzing digital evidence. they work closely with law enforcement and use specialized tools to uncover and document evidence from digital devices.",
            dayToDay: [
            ],
            relevantSkills: ["technical knowledge", "problem-solving", "communication"],
            averagePay: {us: "$70,000 - $100,000/yr", uk: null}
          }
        ],
        notableWomen: [
          {name: "parisa tabriz", title: "google director of engineering"},
          {name: "kate moussouris", title: "luta security founder"}
        ]
      },
      {
        id: 5,
        name: "tech consulting",
        typicalMajors: [
        ],
        roles: [
          {
            title: "technology strategy consultant",
            description: "a technology strategy consultant defines a tech strategy for a business to reach said business' goals, both short-term and long-term and enable a business to use technology to their advantage to align with their vision. they can either specialize in one particular area, or provide support for multiple elements in a technology project.",
            dayToDay: [
              "auditing current technology systems and solutions in the discovery phase",
              "providing unbiased, outside opinions",
              "defining the technological strategy a business will follow",
              "enlightening a business on new technological trends",
              "identifying areas for improvement in technical and business states",
              "analyzing and shaping the technical architecture of a business"
            ],
            relevantSkills: [],
            averagePay: {us: "$140,000/yr", uk: "£65,000/yr"}
          }
        ],
        notableWomen: [
          {name: "sophie ross", title: "fti consulting ceo"},
          {name: "nive bhagat", title: "capgemini ceo & group executive officer"}
        ]
      },
      {
        id: 6,
        name: "cloud",
        typicalMajors: [
        ],
        roles: [
          {
            title: "cloud architect",
            description: "cloud architects oversee a business' cloud computing strategy (cloud adoption plans, cloud application design, cloud management, cloud monitoring, etc). cloud architects manage application architecture and deployment in cloud environments - public, private and hybrid clouds alike. their primary goal is to guarantee that the cloud infrastructure satisfies the business' needs appropriately - performance, security, cost efficiency, and more.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$143,000/yr", uk: "£95,000/yr"}
          },
          {
            title: "cloud engineer",
            description: "'cloud engineer' is a broad term with a wide scope. cloud engineers can be responsible for any technological duty associated with cloud computing. therefore, it can encompass roles such as cloud architect, cloud software engineer, cloud security engineer, and more.",
            dayToDay: [
              "implementing and managing cloud services",
              "developing applications for or based on cloud technology",
              "maintaining cloud infrastructure"
            ],
            relevantSkills: [],
            averagePay: {us: "$127,000/yr", uk: "£65,000/yr"}
          },
          {
            title: "cloud developer",
            description: "cloud developers design and develop cloud applications and services. cloud developers ensures that the applications are adhering to best practices in cloud development.",
            dayToDay: [
              "building, deploying, managing applications in cloud environments, - public, private and hybrid alike"
            ],
            relevantSkills: [],
            averagePay: {us: "$130,000/yr", uk: "£64,000/yr"}
          },
          {
            title: "cloud security engineer",
            description: "cloud security engineers are responsible for designing, implementing, and managing the security of an organization's cloud infrastructure. a cloud security engineer ensures that cloud environments and applications are protected against threats and vulnerabilities. a cloud security engineer also collaborates with other cloud professionals, such as cloud architects and cloud software engineers, to integrate security best practices into the development and deployment of cloud applications. they stays updated with the latest security trends and technologies to ensure that their organization's cloud infrastructure remains secure and applies best standards.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$152,000/yr", uk: "£70,000/yr"}
          }
        ],
        notableWomen: [
          {name: "hillery hunter", title: "ibm cloud vice president & cto"},
          {name: "kirsten kliphouse", title: "google cloud president"},
          {name: "aparna sinha", title: "google cloud director product management"},
          {name: "priyanka vergadia", title: "google cloud developer advocate"},
          {name: "masha sedova", title: "elevate security co-founder & president"},
          {name: "jessica ferguson", title: "docusign chief information security officer"}
        ]
      },
      {
        id: 7,
        name: "information technology",
        typicalMajors: [
        ],
        roles: [
          {
            title: "iot architect",
            description: "iot (internet of things) architects are responsible for designing and overseeing the implementation of iot solutions. they can create the overall architecture for iot systems, including the integration of devices, networks, and cloud services. an iot architect ensures that the solutions are scalable, secure, and efficient, meeting the specific needs of the business. an iot architect collaborates with other roles, such as software developers, network engineers, and data scientists, to develop and deploy iot applications. they are also involved in selecting the right hardware and software components, defining communication protocols, and establishing data management practices. their goal is to enable seamless connectivity and data flow between iot devices and cloud systems.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$128,000/yr", uk: "£77,000/yr"}
          },
          {
            title: "systems administrator",
            description: "systems administrators are responsible for managing and maintaining an organization's it infrastructure, including servers, networks, and hardware systems. they can handle tasks such as system installation, configuration, monitoring, troubleshooting, and updating software and hardware. they can also manage user accounts, permissions, and backup processes to ensure data integrity and availability. systems administrators work with a variety of operating systems, such as windows, linux, and macos, and uses tools for system management, automation, and monitoring.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$85,000/yr", uk: "£50,000/yr"}
          },
          {
            title: "qa tester/engineer",
            description: "qa (quality assurance) testers/engineers responsible for ensuring that software applications and systems meet specified requirements and standards before they are released. they design and execute test plans, test cases, and test scripts to identify and document defects and ensure software quality. qa testers/engineers perform manual and automated testing, analyze test results, and report bugs and issues. they also collaborate with development teams to resolve issues and improve software quality.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$70,000/yr", uk: "£30,000/yr"}
          },
          {
            title: "network engineer",
            description: "network engineers are responsible for designing, implementing, and managing an organization's network infrastructure. they ensure the reliable and efficient operation of network systems, including local area networks (lans), wide area networks (wans), and other network configurations.",
            dayToDay: [
              "configuring network hardware (routers, switches, firewalls)",
              "monitoring network performance",
              "troubleshooting connectivity issues",
              "maintaining network security"
            ],
            relevantSkills: [],
            averagePay: {us: "$90,000/yr", uk: "£45,000/yr"}
          },
          {
            title: "database administrator",
            description: "database administrators (dba) are responsible for the installation, configuration, and maintenance of an organization's databases. they ensure the performance, availability, and security of database systems, as well as managing data integrity and backups.",
            dayToDay: [
              "designing databases",
              "tuning, performance optimization",
              "troubleshooting issues",
              "implementing security measures to protect data"
            ],
            relevantSkills: [],
            averagePay: {us: "$95,000/yr", uk: "£43,000/yr"}
          }
        ],
        notableWomen: [
          {name: "maria gorlatova", title: "duke university assistant professor"},
          {name: "tanya ruiz", title: "microsoft principal program manager"},
          {name: "cassandra leung", title: "linkedin senior systems administrator"},
          {name: "jessica best", title: "dropbox systems engineer"},
          {name: "maaret pyhäjärvi", title: "testivalo qa engineer"},
          {name: "rukmini iyer", title: "cisco senior network engineer"},
          {name: "samantha barrass", title: "google network engineer"},
          {name: "dawn degeorge", title: "ibm senior database administrator"},
          {name: "dr. karen lopez", title: "infoadvisors data architect & database administrator"}
        ]
      },
      {
        id: 8,
        name: "game development",
        typicalMajors: [
        ],
        roles: [
          {
            title: "game designer",
            description: "game designers are responsible for creating the concepts, mechanics, and overall experience of video games. they can design game levels, characters, storylines, and user interfaces, as well as develop gameplay systems and rules. they analyze player feedback to make improvements. game designers work closely with other members of the game development team, including artists, programmers, and sound designers, to ensure that the game meets creative and technical requirements.",
            dayToDay: [
            ],
            relevantSkills: [],
            averagePay: {us: "$70,000/yr", uk: "£36,000/yr"}
          },
          {
            title: "game programmer/developer",
            description: "game programmers/developers write and maintain the code that makes video games function. they are responsible for developing gameplay mechanics, creating game systems, and integrating various components such as graphics, sound, and artificial intelligence.",
            dayToDay: [
              "debugging and testing code",
              "collaborating with other developers, designers, and artists to ensure that the game meets technical and creative requirements",
              "optimizing performance"
            ],
            relevantSkills: [],
            averagePay: {us: "$84,000/yr", uk: "£41,000/yr"}
          },
          {
            title: "game artist",
            description: "game artists create visual elements of video games, including characters, environments, textures, and animations. they design and produce high-quality artwork that enhances the visual appeal and immersive experience of a game.",
            dayToDay: [
              "collaborating with game designers and programmers",
              "participating in the development of visual styles",
              "asset pipelines",
              "optimizing artwork"
            ],
            relevantSkills: [],
            averagePay: {us: "$71,000/yr", uk: "£33,000/yr"}
          }
        ],
        notableWomen: [
          {name: "amy hennig", title: "skydance media game designer & writer"},
          {name: "cindy p. franklin", title: "game designer & developer"},
          {name: "brenda romero", title: "romero games co-founder & game designer/programmer"},
          {name: "megan fox", title: "nixxes software senior game programmer"},
          {name: "kimberly n. wimberly", title: "epic games lead character artist"},
          {name: "ellen mclain", title: "portal & half-life voice actress & game artist"}
        ]
      },
      {
        id: 9,
        name: "ai/ml development",
        typicalMajors: [
        ],
        roles: [
          {
            title: "machine learning engineer",
            description: "machine learning engineers design, build, and deploy machine learning models and systems. they work with large datasets, develop algorithms, and create models that can learn from data to make predictions or decisions. machine learning engineers collaborate with data scientists, software engineers, and domain experts to integrate machine learning solutions into applications and systems. they focus on optimizing models for performance, scalability, and accuracy, ensuring they meet business requirements.",
            dayToDay: [
              "data preprocessing",
              "feature engineering",
              "model training and evaluation",
              "deploying models into production environments"
            ],
            relevantSkills: [],
            averagePay: {us: "$160,000/yr", uk: "£54,000/yr"}
          },
          {
            title: "ai research scientist",
            description: "ai research scientists focus on advancing the field of artificial intelligence through innovative research and development. an ai research scientist typically works in academic institutions, research labs, or tech companies' r&d departments. ai research scientists work on a variety of ai topics, such as machine learning, natural language processing, computer vision, robotics, and reinforcement learning. they collaborate with other researchers, data scientists, and engineers to translate theoretical research into practical applications.",
            dayToDay: [
              "conducting experiments",
              "developing new algorithms",
              "publishing research findings in academic journals and conferences"
            ],
            relevantSkills: [],
            averagePay: {us: "$130,000/yr", uk: "£46,000/yr"}
          },
          {
            title: "deep learning engineer",
            description: "deep learning engineers specialize in designing, developing, and implementing deep learning models and systems. they work with neural networks, such as convolutional neural networks (cnns), recurrent neural networks (rnns), and transformers, to solve complex problems. deep learning engineers collaborate with data scientists, machine learning engineers, and software developers to integrate deep learning solutions into applications. they focus on improving model performance, scalability, and accuracy, ensuring that the solutions meet requirements.",
            dayToDay: [
              "data preprocessing",
              "model architecture design",
              "hyperparameter tuning",
              "deploying models into production environments"
            ],
            relevantSkills: [],
            averagePay: {us: "$115,000/yr", uk: "£63,000/yr"}
          },
          {
            title: "nlp engineer",
            description: "nlp (natural language processing) engineers focus on developing and implementing algorithms and models that enable computers to understand, interpret, and generate human language. they work with various nlp tasks such as text analysis, sentiment analysis, language translation, and conversational ai. they use techniques like tokenization, named entity recognition (ner), and part-of-speech tagging. nlp engineers collaborate with data scientists, machine learning engineers, and software developers to integrate nlp capabilities into applications. their goal is to create efficient, accurate, and scalable nlp solutions that meet business requirements and enhance user experiences.",
            dayToDay: [
              "handling large datasets",
              "preprocessing and cleaning text data",
              "designing model architectures",
              "fine-tuning hyperparameters",
              "deploying models into production environments"
            ],
            relevantSkills: [],
            averagePay: {us: "$168,000/yr", uk: "£52,000/yr"}
          },
          {
            title: "computer vision engineer",
            description: "computer vision engineers specialize in developing and implementing algorithms and models that enable computers to interpret and understand visual information from the world. they work with image and video data to perform tasks such as object detection, image classification, facial recognition, and scene reconstruction.",
            dayToDay: [
              "integrating computer vision capabilities into applications",
              "improving model performance, accuracy, and scalability"
            ],
            relevantSkills: [],
            averagePay: {us: "$121,000/yr", uk: "£56,000/yr"}
          }
        ],
        notableWomen: [
          {name: "fei-fei li", title: "stanford university computer science professor"},
          {name: "rachel thomas", title: "fast.ai co-founder, university of san francisco data science & machine learning professor"},
          {name: "daphne koller", title: "insitro ceo & founder, coursera co-founder"},
          {name: "pascale fung", title: "hong kong university of science and technology (hkust) professor & ai research director"},
          {name: "anna patterson", title: "gradient ventures founder & managing partner"},
          {name: "rana el kaliouby", title: "affectiva co-founder & ceo"},
          {name: "rada mihalcea", title: "university of michigan computer science/engineering professor"},
          {name: "kathleen mckeown", title: "columbia university computer science professor, nlp researcher"},
          {name: "raquel urtasun", title: "waabi founder & ceo, university of toronto computer science professor, uber atg former chief scientist"},
          {name: "maya gupta", title: "google senior research scientist"}
        ]
      }
    ]