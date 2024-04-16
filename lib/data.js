import Flutter from "../public/assets/Flutter.webp"
import Cpp from "../public/assets/c++.webp"
import Blockchain from "../public/assets/Blockchain.webp"
import HTML from "../public/assets/html.webp"
import PHP from "../public/assets/PHP.webp"
import Java from "../public/assets/java.webp"


const courses = [
  {
    id: 8,
    name: "Fundamentals of Blockchain",
    description: 'Learn everything you need to know about cryptocurrency and blockchain, including investing, mining and much more!',
    duration: "90 hours",
    img: Blockchain,
    topics: [
      {
        id: 1,
        name: 'Day 1:Introduction to Blockchain',
        content: [
          'Overview of Blockchain Technology',
          'Historical Context and Evolution',
        ]
      },
      {
        id: 2,
        name: 'Day 2:',
        content: [
          'Components of Blockchain',
          'Types of Blockchains',
          'Blockchain vs. Traditional Database',

        ]
      },
      {
        id: 3,
        name: 'Day 3:Cryptography, Consensus, and Mining',
        content: [
          'Cryptography Basics',
          'Hash Functions'

        ]
      },
      {
        id: 4,
        name: 'Day 4',
        content: [
          'Consensus Mechanisms',
          'Mining in Blockchain',
          'Distributed Ledger Technology',

        ]
      },
      {
        id: 5,
        name: 'Day 5: Blockchain Architecture and Merkle Trees',
        content: [
          'Blockchain Network Architecture',
          'Transaction Lifecycle',
        ]
      },
      {
        id: 6,
        name: 'Day 6',
        content: [
          'Blocks and Chains',
          'Merkle Trees',
        ]
      },
      {
        id: 7,
        name: 'Day 7: Decentralization, Security, and Cybersecurity',
        content: [
          'Decentralization and Trust',
          'Forks and Consensus Algorithms',
        ]
      },
      {
        id: 8,
        name: 'Day 8',
        content: [
          'Network Security',
          'Cybersecurity Concepts in Blockchain',
        ]
      },
      {
        id: 9,
        name: 'Day 9: Blockchain Use Cases',
        content: [
          'Use Cases of Blockchain',
          'Industry Adoption and Trends',
        ]
      },
      {
        id: 10,
        name: 'Day 10',
        content: [
          'Challenges and Limitations',
          'Case Study: Bitcoin',
        ]
      },
      {
        id: 11,
        name: 'Day 11: Other Blockchain Platforms',
        content: [
          'Ethereum and Smart Contracts Overview'
        ]
      },
      {
        id: 12,
        name: 'Day 12',
        content: [
          'Hyperledger Fabric and Corda',
          'Ripple and Interbank Transactions'
        ]
      },
      {
        id: 13,
        name: 'Day 13-16:Layer 1 & Layer 2 Blockchains',
        content: [
          'What is Layer1 Blockchain',
          'Understanding of Layer1 Blockchain',
          'Layer 1 Blockchain Architecture',
          'Examples of Layer1 Blockchain',
          'Case Studies of Layer1 Blockchain',
          'Layer2 Blockchain',
          'Understanding of Layer2 Blockchain Architecture',
          'Solana Blockchain (Layer 1)',
          'Binance Blockchain (Layer 2)',
          'Cosmos Blockchain (Layer 1) ',
          'Polygon Blockchain (Layer 2)',

        ]
      },
      {
        id: 14,
        name: 'Day 17: Real World Applications of Blockchain',
        content: [
          'Supply Chain and Healthcare',
          'Voting Systems and Governance',
          'Education',
          'Fintech',

        ]
      },
      {
        id: 15,
        name: 'Day 18: Decentralised Applications (DApps), Use Cases, and Cybersecurity',
        content: [
          'Challenges in Real-world Implementations',
          'Hashing Algorithms in Blockchain',
          'Decentralised Applications (DApps)',
          'Use Cases of Smart Contracts'

        ]
      },
      {
        id: 16,
        name: 'Day 19',
        content: [
          'Security Considerations',
          'Cybersecurity in Smart Contracts'
        ]
      },
      {
        id: 17,
        name: 'Day 20: Ethereum 2.0, Tokenization, and Mining',
        content: [
          'Ethereum 2.0 and Proof of Stake',
          'ERC Standards',
        ]
      },
      {
        id: 18,
        name: 'Day 20: Ethereum 2.0, Tokenization, and Mining',
        content: [
          'Ethereum 2.0 and Proof of Stake',
          'ERC Standards'
        ]
      },
      {
        id: 19,
        name: 'Day 21',
        content: [
          'Tokenisation',
          'ICOs and Mining Pools'
        ]
      },
      {
        id: 20,
        name: 'Day 22-23: Coins Vs Tokens ',
        content: [
          'What is Crypto coin ?',
          'What is a Token',
          'ERC 20 & ERC 721',
          'Creating our Token ',
          'Publishing our Token',
        ]
      },
      {
        id: 21,
        name: 'Day 24-25: Legal, Ethical, and Environmental Considerations',
        content: [
          'Legal Aspects of Blockchain',
          'Intellectual Property and Patents',
          'Ethical Considerations in Blockchain',
          'Environmental Concerns',
          'Social Impact of Blockchain',
          'Inclusion and Accessibility',
          'Data Privacy and GDPR',
        ]
      },
      {
        id: 22,
        name: 'Day 26-27:Mining',
        content: [
          'Introduction to Mining',
          'Why Mining?',
          'Who are Miners?',
          'Miners process',
          'Bitcoin Mining Process',
          'Ethereum Mining Process',
          'Solana ',
          'Polygon'
        ]
      },
      {
        id: 23,
        name: 'Day 24-25:ICO/IDO/IEO',
        content: [
          'ICO & its Process',
          'IDO, its importance and its process',
          'IEO and its process'
        ]
      },
      {
        id: 24,
        name: 'Day 30-32:Centralised Exchanges',
        content: [
          'Understanding about Centralised Exchanges',
          'Wallets',
          'Trading in Centralised Exchanges',
          'Architecture of Exchange'

        ]
      },
      {
        id: 25,
        name: 'Day 33-33:Decentralised Exchanges',
        content: [
          'Understanding Decentralised Exchanges',
          'Decentralised Wallets',
          'Architecture of Decentralised Exchanges'
        ]
      },
      {
        id: 26,
        name: 'Day 36:Public / Private and Hybrid Blockchain',
        content: [
          'Case Studies by understanding its Architecture and its usage'
        ]
      },
      {
        id: 27,
        name: 'Day 37: Project',
        content: [
          'Token Creation',
          'Publishing of tokens'
        ]
      },
      {
        id: 28,
        name: 'Day 38:Project  Presentation',
        content: [
          'Case Study : Blockchain in Healthcare',
          'Presentation, Architecture,working process and concepts '
        ]
      },
      {
        id: 29,
        name: 'Day 39:Project Presentation',
        content: [
          'Case Study : Blockchain in Immigration'
        ]
      },
      {
        id: 30,
        name: 'Day 40: Complete Summary of the Course',
        content: [

        ]
      },
      {
        id: 30,
        name: 'Day 41 : Q & A ',
        content: [
        ]
      },
      {
        id: 31,
        name: 'Day 42 - Day 44 : Preparation for Exam',
        content: [

        ]
      },
      {
        id: 32,
        name: 'Day 45 : Exam for certification',
        content: [

        ]
      },
    ]
  },
  {
    id: 1,
    name: "HTML ,CSS,JavaScript",
    description: 'A Comprehensive Guide for Beginners interested in learning HTML, CSS, & JavaScript to Build Interactive Web Pages.',
    duration: "90 hours",
    img: HTML,
    topics: [
      {
        id: 1,
        name: "Introduction",
        content: [
          'Overview of Web and Internet',
          'Difference between Languages and Scripts',
          'Client side and Server side Programming',
          'What is HTML?',
          'Versions of HTML',
          'Structure Of HTML',
          'How html content is transferring data between browser and server',
          'Types of Webpages',
          'Introduction To Doctypes'
        ]
      },
      {
        id: 2,
        name: 'HTML Tags',
        content: [
          'Types of tags',
          'Explanation about html, head and body tags',
          'Input controls and attributes',
          'How to divide web page with div tag',
          'Formatting Tags',
          'Link Tags',
          'How to create order list and unordered list',
          'Table tag',
          'Form tag',
          'Frame Tag',
          'How to provide Meta keywords',
          'What is Meta Description?'
        ]
      },
      {
        id: 3,
        name: 'Attributes',
        content: [
          'What is an attribute?',
          'Attributes of html controls'
        ]
      },
      {
        id: 4,
        name: 'Events',
        content: [
          'What is an event and how to use it?',
          'Dynamic html with events'
        ]
      },
      {
        id: 5,
        name: 'Styling',
        content: [
          'What is a style object?',
          'Properties of style',
          'Applying styles to elements',
          'Changing style properties with events'
        ]
      },
      {
        id: 6,
        name: 'Advanced HTML',
        content: [
          'How to embed the external plug-in in html document',
          'How can we display videos on browsers using html tags?',
          'How to embed external web pages in html page',
          'Resolving cross browser issues.',
          'What is new in HTML5?'
        ]
      },
      {
        id: 7,
        name: 'CASCADING STYLE SHEETS',
        content: [
          'What is CSS?',
          'Advantages of CSS',
          'Why CSS?',
          'Syntax and Anotomy of CSS'
        ]
      },
      {
        id: 8,
        name: 'Types of Stylesheets',
        content: [
          'External style sheet',
          'Internal style sheet',
          'Inline style'
        ]
      },

      {
        id: 9,
        name: 'Types of Selectors',
        content: [
          'Global',
          'Class',
          'Id',
          'Grouped',
          'Descendant'
        ]
      },
      {
        id: 10,
        name: 'Div’s & Span tags',
        content: [
          'Background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-attachment',
          'background-position'
        ]
      },
      {
        id: 11,
        name: 'Font',
        content: [
          'font-family',
          'color',
          'font-size',
          'font-style',
          'font-variant',
          'font-weight'
        ]
      },
      {
        id: 12,
        name: 'Text',
        content: [
          'letter-spacing',
          'Word-spacing',
          'line-height',
          'text-decoration',
          'text-transform',
          'vertical-align',
        ]
      },
      {
        id: 13,
        name: 'Introduction to javascript',
        content: [
          'Introduction of client side script',
          'Introduction of javascript',
          'Cross browser issues',
          'Declaration syntax of javascript',
          'Statements',
          'Comments',
          'Popup Boxes',
          'Alert',
          'Confirm',
          'Prompt',
          'Variables, Arrays and Operators',
          'Variables',
          'Operators',
          'Arithmetic',
          'Assignment',
          'Comparison',
          'Logical',
        ]
      },
      {
        id: 15,
        name: 'Document object model',
        content: [
          'Functions and types',
          'Conversion functions'
        ]
      },
      {
        id: 16,
        name: 'Conditional statements',
        content: [
          'if',
          'if…else',
          'if…else if…else',
          'Switch'
        ]
      },
      {
        id: 17,
        name: 'Loops',
        content: [
          'while',
          'do…while',
          'for',
          'for…in Statement',
          'Break',
          'Continue'
        ]
      },
      {
        id: 18,
        name: 'HTML TagsWindow object Document object Arrays',
        content: [
          'Associative Arrays',
          'Array Properties and Methods',
        ]
      },
      {
        id: 3,
        name: 'Advanced JavaScript',
        content: [
          'Date object',
          'This object',
          'Event object',
          'State management',
          'Cookie',
          'Form validation',
          'Expressions',
          'Email validation',
          'Dynamic functionalities of html controls'
        ]
      },
    ]
  },
  {
    id: 2,
    name: "C and C++ COURSE",
    description: "C Programming and C++ Programming Learn both at your own pace",
    duration: "",
    img: Cpp,
    topics: [
      {
        id: 1,
        name: "Introduction to “ C ” Language",
        content: [
          'Data types',
          'Indentation',
          'If else',
          'Operators',
          'The “WHILE” Loop',
          'The “For “ Loop',
          'Nested Loop Statements',
          'The “BREAK” & “CONTINUE” Statement',
          'Switch case default & break',
          'Bitwise operators'
        ]
      },
      {
        id: 2,
        name: 'Functions',
        content: [
          'Introduction to Functions',
          'Need for Functions',
          'Standard & User defined Functions',
          'What is header file',
          'How to create our own header file',
          'Difference between source file & exe file',
          'How to create exe file',
          'Defining & Calling Functions',
          'Storage Classes',
          'Automatic Storage Classes',
          'Register Storage Classes',
          'Static Storage Classes',
          'External Storage Classes',
          'Pass by Value, pass by Reference',
          'Return by value & return by address',
          'Recursive Functions'
        ]
      },
      {
        id: 3,
        name: 'Pointers',
        content: [
          'Memory concept',
          'Pointers to variable',
          'Pointers to pointers',
          'Pointers with operation'
        ]
      },
      {
        id: 4,
        name: 'Arrays',
        content: [
          'Introduction to Arrays',
          'Need for Arrays',
          'Arrays with pointers',
          'Arrays with functions',
          'Types of Arrays',
          'One Dimensional Arrays',
          'Two Dimensional Arrays',
          'Multi Dimensional Arrays',
        ]
      },
      {
        id: 5,
        name: 'Strings',
        content: [
          'Char pointers',
          'Char array (String)',
          'Declaring & Initializing String Variables',
          'Strings with pointers',
          'Strings with functions',
          'String Functions',
          'Creation of our own string.h',
          'Array of Strings',
          '#define (preprocessing work)',
        ]
      },
      {
        id: 6,
        name: 'Structures, Unions, Enum and typedef',
        content: [
          'Enum and typedef',
          'Introduction to Structures',
          'Defining Structures',
          'Struct with pointers , arrays, strings and functions',
          'Array ,strings as Structures Members',
          'Containership',
          'Union, Different between Structure & Union'
        ]
      },
      {
        id: 7,
        name: 'Graphics Programming',
        content: [
          'In text Mode',
          'In Graphics Mode'
        ]
      },
      {
        id: 8,
        name: 'File Operations',
        content: [
          'Introduction to files',
          'Types of Files',
          'File Pointers',
          'Opening & Closing Files',
          'Modifying & deleting Files',
          'Interacting with',
          'ext files (ex: .txt, .c, .cpp)',
          'non text files (ex: .dat, .mpg, .avi, .mp3)',
          'data base files',
          'Creating database with file operation',
          'Command Line Arguments',
        ]
      },
      {
        id: 9,
        name: 'Dynamic memory allocation ( DS )',
        content: [
          'Purpose of dynamic memory allocation',
          'Malloc , calloc ,realloc and free',
          'Sorting●',
          'Recursion',
          'Lists',
          'Single linked lists',
          'Double linked lists',
          'Circular linked lists',
          'Stacks',
          'Queues',
          'Adding 2 lists',
          'Inserting a node in required position',
          'Deleting a node from required position'
        ]
      },
      {
        id: 10,
        name: 'Introduction to “ C++ ” Programming',
        content: [
          'Oops',
          'Function Prototypes',
          'Comments',
          'Typecasting',
          'Void Pointers',
          'The :: operator',
          'The Const Qualifier',
          'Reference variables',
        ]
      },
      {
        id: 11,
        name: 'Functions',
        content: [
          'Function Prototypes',
          'Function Overloading',
          'Default Arguments in Functions',
          'Call by value, address & reference',
          'Return by value, by address & By reference',
          'Inline Functions',
        ]
      },
      {
        id: 12,
        name: 'Classes in C++',
        content: [
          'Member function',
          'Function Definition Outside The Class',
          'Classes and Constructors',
          'Destructors',
          'Copy Constructor',
          'The this Pointer',
          'New and delete Operators',
          'Using new and delete',
          'Malloc ( ) / free ( ) versus new/delete',
          'Classes, Objects and Memory',
          'Structures vs. Classes',
        ]
      },
      {
        id: 13,
        name: 'Miscellaneous Class Issues',
        content: [
          'Static Class Data',
          'Static Member Functions',
          'Data Conversion',
          'Friend functions & friend Classes',
          'Data Conversion between Objects of Different Classes',
        ]
      },
      {
        id: 14,
        name: 'Overloading operators',
        content: [
          'Introduction',
          'Overloading assignment operator',
          'Overloading ++, --, +, -, *, /,<,> …. & Logical operators',
          'Overloading operators between different objects',
          'Overloading << and >> (stream operators)'
        ]
      },
      {
        id: 15,
        name: 'Inheritance',
        content: [
          'Constructors in Inheritance',
          'Private Inheritance',
          'Protected Inheritance',
          'Functions That Are Not inherited',
          'Virtual Function',
          'Pure virtual functions',
          'Virtual Functions in Derived Classes',
          'Virtual Functions and Constructors',
          'Destructors and virtual Destructors',
          'Virtual Base Classes',
          'Abstract class',
          'Abstract base class',
        ]
      },
      {
        id: 16,
        name: 'Advanced Features',
        content: [
          'Classes Within Classes',
          'Friend Functions',
          'Friend classes',
          'Overloading << and >>.'
        ]
      },
      {
        id: 17,
        name: 'AInput / Output In C++ (File operations)',
        content: [
          'Manipulators',
          'File I/O with Streams',
          'Opening and closing files',
          'Creating database with file Operation',
          'Binary I/O',
          'Elementary Database Management',
          'Interacting with',
          'Text files (ex: .txt, .c, .cpp)',
          'Non-text files (ex: .dat, .mpg, .avi, .mp3)',
          'Creating database with file operation'
        ]
      },
      {
        id: 18,
        name: 'New Advanced Features',
        content: [
          'Templates',
          'Function templates',
          'Class templates',
          'Exception handling',
          'Namespaces',
          'RTTI (Runtime type information)',
          'STL (Standard Template library)',
          'Dynamic cast operator',
          'Typeid operator',
          'Typeinfo class',
        ]
      },
      {
        id: 19,
        name: 'Advanced Features',
        content: [
          'Sorting',
          'Recursion',
          'Lists',
          'Single linked lists',
          'Double linked lists',
          'Circular linked lists',
          'Traversing of linked lists',
          'Stacks',
          'Queues',
          'Adding 2 lists',
          'Inserting a node in required position',
          'Deleting a node from required position',
        ]
      },
    ]
  },

  {
    id: 3,
    name: "PHP course",
    description: "The modern PHP course with a project, challenges and theory. Includes SQL and MVC Framework. Get started with PHP 8!",
    duration: "",
    img: PHP,
    topics: [
      {
        id: 1,
        name: "Creating, Managing and Mastering MySQL - MySQL Database",
        content: [
          'Installing and Configuring MySQL',
          'Understanding MySQL',
          'Creating and Managing Database',
          'MySQL data types',
          'Creating Tables and Managing Tables',
          'Data Manipulation in Tables – Insert, Update, Delete',
          'Querying Data from Tables – Select, Joins',
          'Advanced Data Manipulation – Groups, Functions, Constraints, Index',
          'Handling Transactions in MySQL'
        ]
      },
      {
        id: 2,
        name: 'Developing Web Applications using PHP - Introduction to PHP',
        content: [
          'What is PHP',
          'The Power of PHP',
          'Learning the history of PHP',
          'Javascript / Jquery Vs PHP',
          'What is Server Side Scripting',
          'Client Side Scripting Vs Server Side Scripting',
          'Installation of XAMPP',
          'Importance of Apache Server',
          'Configuring PHP and setting up the Environment',
          'Working with Editors',
        ]
      },
      {
        id: 3,
        name: 'Basics of PHP',
        content: [
          'Coding PHP in HTML Document',
          'Embedding PHP Codes',
          'Executing PHP Embedded HTML Documents',
          'PHP Coding Structure',
          'Variables in PHP',
          'Data types in PHP – Number, Strings, Date, NULL',
          'Arrays and Variations of Arrays'
        ]
      },
      {
        id: 4,
        name: 'Control Structures of PHP',
        content: [
          'Decision Making with IF Statements​',
          'Variations of IF Statements',
          'Switch Statements',
          'Using Operators with Decision Making Structures',
          'Looping Structures',
          'While Loops, For Loops, Foreach Loops',
          'Using CONTINUE and BREAK in Loops',
          'Managing Arrays with Control Structures',
        ]
      },
      {
        id: 5,
        name: 'Functions in PHP',
        content: [
          'Understanding Functions in PHP',
          'Using Built-in Functions – Date, String and Mathematical Functions',
          'Handling Return Value',
          'Nesting Functions',
        ]
      },
      {
        id: 6,
        name: 'User Defined Functions in PHP',
        content: [
          'Defining our Own Functions',
          'Understanding Arguments and Return Values',
          'Scope of Functions',
          'Handling Multiple return values',
          'Defining default Arguments',
        ]
      },
      {
        id: 7,
        name: 'File Handling in PHP',
        content: [
          'Basics of File Handling and need to handle Files from PHP',
          'Creating a File using PHP',
          'Reading, Writing, Appending Files',
          'Copy and Rename Files',
          'Delete Files',
          'Working with Directories',
          'Parsing Directory Structures',
          'Uploading Files',
        ]
      },
      {
        id: 8,
        name: 'Handling FORMS in PHP',
        content: [
          'Understanding PHP Forms',
          'Validating User Inputs',
          'Displaying Messages for Validation Errors',
          'Using Functions for Validations',
          'Creating Custom Functions for Data Validation',
          'Handling Form Submissions',
          'Handling Exceptions',
        ]
      },
      {
        id: 9,
        name: 'Accessing MySQL with PHP',
        content: [
          'Introduction to Database APIs',
          'Establishing Connection with Databases',
          'Retrieving data from Database',
          'Manipulating Retrieved Data',
          'Updating Records in Database using PHP',
          'Deleting Records in Database using PHP',
          'Understanding SQL Injection',
        ]
      },
      {
        id: 10,
        name: 'Sessions and Cookies',
        content: [
          'Understanding Cookies',
          'Purpose and use of Cookies',
          'Setting and Reading Cookie Values',
          'Resetting Cookie Values',
          'Understanding Sessions and importance of Sessions',
          'Starting a Session and Working with Session',
          'Understanding Session Variables',
          'Closing Sessions',
        ]
      },
      {
        id: 11,
        name: 'Using Emails for Form Submission in PHP',
        content: [
          'Email Configuration in PHP',
          'Need for Sending Mails from Web Applications',
          'Using Sendmail',
          'Using PHPMailer',
        ]
      },
    ]
  },
  {
    id: 4,
    name: "Advanced Java Training",
    description: "Acquire Key Java Skills: From Basics to Advanced Programming &amp; Certification - Start Your Dev Career",
    duration: "",
    img: Java,
    topics: [
      {
        id: 1,
        name: 'Introduction',
        content: [
          'About Java Platforms',
          'Applications of Java',
          'About API (Application Programming Interface)',
          'Static Blocks',
          'Introduction to interfaces',
          'Runtime Polymorphism'
        ]
      },
      {
        id: 2,
        name: 'Persistence',
        content: [
          'What is Persistence?File management system',
          'Disadvantages of File management system',
          'Database management system',
          'Advantages of Database management system'
        ]
      },
      {
        id: 3,
        name: 'JDBC',
        content: [
          'Introduction to JDBC',
          'Why JDBC? & ODBC Vs JDBC',
          ' Approch-1 Vendor specific library',
          'Disadvantages',
          'Approch-2 X/Open standards',
          'Disadvantages',
          'Approch-3 ODBC standards',
          'Disadvantages',
          'Approch-4 JDBC standards',
          'Advantages',
        ]
      },
      {
        id: 4,
        name: 'JDBC API and JDBC Drivers',
        content: [
          'About JDBC API',
          'What is a JDBC Driver?',
          'JDBC architecture',
          'Types of JDBC Drivers',
          'JDBC-ODBC bridge driver',
          'Advantages & Disadvantages',
          'Native API Partly Java Driver',
          'Advantages & Disadvantages',
          'Net-Protocol all/pure java driver',
          'Advantages & Disadvantages',
          'Native-Protocol pure java driver',
          'Advantages'
        ]
      },
      {
        id: 5,
        name: 'JDBC API',
        content: [
          'JDBC Packages',
          'sql, Javax.sql',
          'Interfaces and classes in above packages',
          'Versions of JDBC API',
          'Steps for developing JDBC application'
        ]
      },
      {
        id: 6,
        name: 'Introduction to SQL',
        content: [
          'Types of SQL queries'
        ]
      },
      {
        id: 7,
        name: 'Establishing Connection to Database',
        content: [
          'About DriverManager class',
          'Methods of DriverManager',
          'What is registering driver with DriverManager',
          'Different methods of registering driver with DriverManager',
          'About getConnection method of DriverManager',
          'Syntax of URL to communicate with database',
          'Autoloading of class driver in JDBC 4.0',
          'Example with Application',
        ]
      },
      {
        id: 8,
        name: 'Introduction',
        content: [
          'About DriverManager class',
          'Methods of DriverManager',
          'What is registering driver with DriverManager',
          'Different methods of registering driver with DriverManager',
          'About getConnection method of DriverManager',
          'Syntax of URL to communicate with database',
          'Autoloading of class driver in JDBC 4.0',
          'Example with Application',
        ]
      },
      {
        id: 9,
        name: 'Statement interface',
        content: [
          'What is Statement? & Need of Statement',
          'Characteristics of Statement',
          'How to get Statement object?',
          'Methods of Statement',
          'Passing SQL statements to Database',
          'About execute, executeUpdate, executeQuery, largeExecute Updates methods',
          'Example with Application',
        ]
      },

      {
        id: 10,
        name: 'PreparedStatement interface',
        content: [
          'What is PreparedStatement?',
          'Need of PreparedStatement',
          'Difference between Statement and PreparedStatement',
          'How to get PreparedStaement object',
          'Defining parameters',
          'How to pass values to PerparedStatement object',
          'What is SQL Injection attack & how to overcome',
          'Example with Application',
        ]
      },

      {
        id: 11,
        name: 'Resultset Interface',
        content: [
          'What is ResultSet?',
          'Need of ResultSet',
          'How to get resultset object',
          'Methods of ResultSet',
          'Reading data, Various types of ResultSet',
          'Resultset types',
          'TYPE_SCROLL_SENSITIVE',
          'TYPE_SCROLL_INSENSITIVETYPE_FORWARD_ONLY',
          'Resultset modes',
          'CONCUR_READ_ONLY, CONCUR_UPDATABLE',
          'Example with Application'
        ]
      },
      {
        id: 12,
        name: 'SQL 99 Datatypes',
        content: [
          'BLOB',
          'Inserting blob type, Reading blob type',
          'CLOB',
          'Inserting clob type, Reading clob type',
          'Array, Inserting array type',
          'Reading array type',
          'Object, Inserting object',
          'Reading object',
          'Example with Application',
        ]
      },
      {
        id: 13,
        name: 'Metadata',
        content: [
          'Resultset Metadata',
          'Need of ResultsetMetaData',
          'How to get metadata',
          'DatabaseMetadata',
          'How to get database metadata',
          'Parameterizedmetadata',
          'How to get parameterizedmetadata',
          'Example with Application',
        ]
      },
      {
        id: 14,
        name: 'CallableStatement',
        content: [
          'About CallableStatement',
          'Advantage of CallableStatement',
          'Creating CallableStatement object',
          'Calling Procedure using CallableStatement',
          'Calling functions using Callable Statement',
          'About PL/SQL Programming vs Manual on Batch Queries',
        ]
      },
      {
        id: 15,
        name: 'Batch updates',
        content: [
          'What is batch processing',
          'Batch updates using Statement object',
          'Batch updates using PreparedStatement object',
        ]
      },
      {
        id: 16,
        name: 'Transaction Management',
        content: [
          'Transaction Definition',
          'ACID Properties',
          'Atomicity, Consistency,Isolation, Durability',
          'Methods in Transaction Management',
          'setAutoCommit(), setSavePoint()',
          'commit(), rollback()',
          'Example with All Application',
        ]
      },
      {
        id: 17,
        name: 'Connection Pooling',
        content: [
          'What is connection pooling?',
          'Advantages of connection pooling',
          'Disadvantage of DriverManager',
          'About DataSource',
          'JDBC connection pooling',
          'Isolation Levels',
          'Example with Application',
        ]
      },
      {
        id: 18,
        name: 'RowSet',
        content: [
          'What is RowSet?',
          'What is difference between ResultSet and RowSet',
          'Types of RowSets',
          'JdbcRowSet',
          'CachedRowSet',
          'WebRowSet',
          'Example with Application',
        ]

      },
      {
        id: 19,
        name: 'Communicating with different databases',
        content: [
          'Communicating with MYSQL',
          'Working with CSV files',
          'Communicating with MS-EXCEL',
          'Communicating with PostgreSql',
          'Example with Application',
        ]
      },
      {
        id: 20,
        name: 'JDBC 4.0 Features',
        content: [
          'Auto-loading of JDBC driver class',
          'Connection management enhancements',
          'Support for RowIdSQL type',
          'DataSet implementation of SQL using AnnotationsSQL exception handling enhancements',
          'SQL XML support',
          'Example with Application',
        ]
      },
      {
        id: 21,
        name: 'Working With Properties File',
        content: [
          'Working With Date Values',
          'Procedure To Create Desktop icon (jar file execution)',
        ]
      },
      {
        id: 22,
        name: 'JEE',
        content: [
          'JEE technology',
          'Components of JEE technology',
          'What is Enterprises Application',
          'What is Web Application',
          'Types of Web Application',
          'Presentation Oriented Web Application',
          'Service Oriented Web Application',
          'About Web Client, About WebServer',
          'About ApplicationServer',
          'Diff Between WebServer And Application Server',
        ]
      },
      {
        id: 23,
        name: 'Introduction',
        content: [
          'Server side technologies',
          'Need of server side technologies',
          'Client side technologies',
          'What is Servlet? & Advantages of Servlet',
          'Difference between CGI and Servlet',
        ]
      },
      {
        id: 24,
        name: 'Servlet API',
        content: [
          'Versions of Servlet API',
          'Packages of Servlet API',
          'About Servlet Container',
          'Responsibilities of Servlet Container',
        ]
      },
      {
        id: 25,
        name: 'HTTP Protocol',
        content: [
          'What is HTTP?',
          'What is HTTP Request format & Response format',
          'What is HTTP Request format & Response format'
        ]
      },
      {
        id: 26,
        name: 'Developing Servlet',
        content: [
          'Servlet interface',
          'Methods of Servlet interface',
          'Developing servlet by implementing Servlet interface',
          'Life cycle methods of Servlet',
          'Web Application directory structure',
          'Deployment descriptor file (web.xml)',
          'What is deployment?',
          'Types of deployments',
          'Deployment, Console deployment',
          'Tool deployment',
          'Deployment web application in tomcat server',
          'URL patterns'
        ]
      },
      {
        id: 27,
        name: 'Developing And Deploying Servlet Apps in Diff Servers Like',
        content: [
          'Tomcat Server',
          'JBoss Server / WildFly',
          'Weblogic Server',
          ' GlassFish',
          'ServletRequest',
          'Methods of ServletRequest',
          'About request parameters',
          'About request headers',
          'ServletResponse',
          'Methods of ServletResponse',
          'MIME types',
          'Generating response',
          'ServletConfig',
          'What is ServletConfig?',
          'What is need of ServletConfig',
          'Methods of ServletConfig',
          'Different ways of getting ServletConfig objects.',
          'Defining config initial parameters in web.xml',
          'GenericServlet',
          'What is GenericServlet?',
          'Methods of GenericServlet',
          'About init(ServletConfig),init() method',
          'Working with welcome-file',
          'Configuring welcome-file in web.xml',
          'Methods of loading Servlet',
          'About load on startup',
          'When client send first requestServletContext',
          'What is ServletContext?, Need of ServletContext',
          'Methods of ServletContext',
          'Different ways of getting ServletContext object',
          'Context init parameters',
          'Defining Context init parameters in web.xml',
        ]
      },
      {
        id: 28,
        name: 'HttpServlet',
        content: [
          'What is HttpServlet?',
          'Methods of HttpServlet',
          'HTTP Request methods',
          'About public service and protected service methods',
          'About doXXX() methods',
          'Difference between GenericServlet and HttpServlet',
          'Diff Between doGet(-,-) and doPost(-,-) methods',
        ]
      },
      {
        id: 29,
        name: 'HttpServletRequest',
        content: [
          'HttpServletRequest VS ServletRequest',
          'How to read request parameters of HttpServletRequest',
          'How to read request headers of HttpServletRequest',
        ]
      },
      {
        id: 30,
        name: 'HttpServletResponse',
        content: [
          'HttpServletResponse VS ServletResponse',
          'About HttpServletResponse methods',
          'Response status codes',
        ]
      },
      {
        id: 31,
        name: 'Redirecting',
        content: [
          'About sendRedirect method',
          'Difference between sendRedirect and forward methods',
          'setStatus, response.setHeader methods',
        ]
      },
      {
        id: 32,
        name: 'Attributes',
        content: [
          'What is Attribute',
          'Difference between parameter and attribute',
          'Scope of Attributes',
          ' Request scope, Context scope',
          'Session scope',
          'Adding, removing and modifying attributes',
        ]
      },
      {
        id: 33,
        name: 'State and Session Management',
        content: [
          'About connectionless protocol',
          'About connection oriented protocol',
          'Stateless protocol',
          'What is state/session management',
          'Need of session management',
          'Session management methods',
        ]
      },
      {
        id: 34,
        name: 'URL rewriting, Hidden form fields',
        content: [
          'Cookies, HttpSession',
          'URL Rewriting',
          'What is URL rewritingURL rewriting techniques',
          'Disadvantages of URL rewriting',
        ]
      },
      {
        id: 35,
        name: 'Hidden form fields',
        content: [
          'What is hidden form fields',
          'Disadvantages of hidden form fields',
        ]
      },
      {
        id: 36,
        name: 'Cookies',
        content: [
          'What is Cookie,',
          'How to create Cookie',
          'Methods of Cookie',
          'Types of Cookies',
          'Non Persistent Cookie',
          'Persistent Cookie',
          'How to add cookie to response',
          'How to read cookie from request',
          'Deleting cookie from servlet',
          'Properties of Cookie',
          'Disadvantages of Cookies',
        ]
      },
      {
        id: 37,
        name: 'HttpSession',
        content: [
          'What is HttpSession',
          'Advantage of HttpSession',
          'How to create HttpSession object',
          'How to read HttpSession object from request',
          'Invalidating HttpSession',
          'Using invalidate method',
          'Using session config in web.xml',
          'By setting time',
          'HttpSession attribute'
        ]
      },
      {
        id: 38,
        name: 'Error Handling in Servlet',
        content: [
          'Configuring in web.xml'

        ]
      },
      {
        id: 39,
        name: 'Filters',
        content: [
          'What is Filter?',
          'Need of Filter & Lifecycle of Filter',
          'Filter mapping in web.xmlAbout FilterConfig',
          'Defining config parameters in web.xml',
          'About FilterChain interface',
          'Methods of FilterChain',
          'What is Filter chaining?',
          'Working with filter chaining',
        ]
      },
      {
        id: 40,
        name: 'Listeners',
        content: [
          'What is Listener?',
          'Usage of Listener',
          'About Event Delegation Model Architecture',
          'Types of Listeners',
          'RequestListener',
          'ServletContextListener',
          'HttpSessionListener',
          'Types of Attribute Listener',
          'Request AttributeListener',
          'HttpSessionAttributeListener',
          'ServletContextAttributeListener',
          'About Event classes',
        ]
      },
      {
        id: 41,
        name: 'Authentication and Authorization(Security In Servlet Programming)',
        content: [
          'Understanding Authentication Mechanism',
          'HTTP basic authentication',
          'HTTP Digest authentication',
          'HTTPS Client authentication',
          'HTTP form based authentication'
        ]
      },
      {
        id: 42,
        name: 'Working Connection Pooling',
        content: [
          'Connection pooling in difference servers',
          'Tomcat, Weblogic, Glassfish',
          'JBoss Server / WildFly',
          'Developing servlet using server side connection pooling'
        ]
      },
      {
        id: 43,
        name: 'Working with domains',
        content: [
          'Creating domain in weblogic server',
          'Deploying web application using console',
          'Creating domain in glassfish server',
          'Deploying web application using console'
        ]
      },
      {
        id: 44,
        name: 'Working with Servlet 2.5/3.0/3.1 features',
        content: [
          'Async Servlet',
          'File Uploading and Downloading',
          'Non-blocking I/O',
          'HTTP protocol upgrade mechanism',
          'Different Types Of URL Patterns',
          'Dynamic Registration Of Servlet (Developing Servlet Program Without web.xml)'
        ]
      },
      {
        id: 45,
        name: 'Annotations in Servlet Programming',
        content: [
          'Introduction to Annotations',
          'Types of Annotations',
          'Annotations Vs web.xml',
        ]
      },
      {
        id: 46,
        name: 'JSP Introduction',
        content: [
          'What is JSP?',
          'Advantages of JSP & Applications of JSP',
          'Difference between JSP & Servlet',
        ]
      },
      {
        id: 47,
        name: 'JSP Basics',
        content: [
          'JSP Life cycle, JSP Lifecycle methods',
          'jspInit, _jspService',
          'jspDestroy, Saving jsp file as a',
          'Public resource, Private resouse',
        ]
      },
      {
        id: 48,
        name: 'JSP tags',
        content: [
          'JSP Tags',
          'three categories of tags',
          'scripting elements, directives',
          'standard actions'
        ]
      },
      {
        id: 49,
        name: 'Scripting Elements',
        content: [
          'What is scripting elements',
          'types of scripting elements',
          'Declaration tag',
          'Expression tag',
          'Scriptlet',
        ]
      },
      {
        id: 50,
        name: 'JSP implicit object',
        content: [
          'What is jsp implicit objects',
          'Need of jsp implicit objects',
          'Implicit objects of jsp',
          'Request, Response, Page',
          'pageContext, out, session',
          'exception, application, config',
        ]
      },
      {
        id: 51,
        name: 'Directives',
        content: [
          'What is directive?',
          'Types of directives',
          'Page directive, Include directive',
          'Taglib directive',
          'Standard Actions',
          'What is standard action',
        ]
      },
      {
        id: 52,
        name: 'Standard actions',
        content: [
          '<jsp:include>',
          '<jsp:forward>',
          '<jsp:param>',
          '<jsp:useBean>',
          '<jsp:setProperty>',
          '<jsp:getProperty>',
          'Working with <jsp:include>',
          'Difference between <jsp:include> and <%@include> directive',
          'Working with <jsp:forward></jsp:forward>',
        ]
      },

      {
        id: 53,
        name: 'Java Bean',
        content: [
          'What is java bean?',
          'Usage of bean',
          'Properties of bean',
        ]
      },
      {
        id: 54,
        name: 'Using Java Bean in JSP',
        content: [
          'About <jsp:useBean>',
          'Attributes of <jsp:useBean>',
          'Working with scope of bean object',
          'Using bean with <jsp:include> and <jsp:forward>',
          'Assigning values to bean using <jsp:setProperty>',
          'Reading values from bean using <jsp:getProperty></jsp:getProperty>',
        ]
      },
      {
        id: 55,
        name: 'Expression Language',
        content: [
          'What is Expression Language',
          'Advantage of Expression Language',
          'Syntax of defining expression',
          'Basic Operators in EL',
          ' Implicit objects In EL',
          ' pageScope, requestScope',
          'sessionScope, applicationScope',
          'param, paramValues, header',
          'headerValues, initParam, cookie',
          'pageContext, Defining functions',
        ]
      },
      {
        id: 56,
        name: 'Working JSTL',
        content: [
          'What is JSTL?, Version of JSTL',
          'Classification of JSTL tags',
          'Core tags, Formatting tags',
          'SQL Tags, XML tags',
          'JSTL Functions',
          'How to use JSTL in web application',
          'Working with Core tags, Formatting tags & SQL tags',
          'Working JSTL functions',
        ]
      },
      {
        id: 57,
        name: 'Custom Tags',
        content: [
          'What is tag?, Java based tag',
          'Components of tag library',
          'The Tag Handler Class',
          'The Tag Library Descriptor File',
          'Imports a tag library (referencing URL of descriptor file)',
          'Defines tag prefix',
          'Uses tags, About tag handler',
          'Tag interface, SimpleTag',
          'TagSupport, BodyTagSupport',
          'SimpleTagSupport',
          'Developing tag using SimpleTagSupport class',
          'Lifecycle of custom tag',
          'Tag handler class with attributes',
          'Developing tag with body',
        ]
      },
      {
        id: 58,
        name: 'MVC Architecture',
        content: [
          'MVC Design patternMVC-1 Page Centric',
          'Advantages & Disadvantages',
          'MVC-2'
        ]
      },
      {
        id: 59,
        name: 'Developing Project using MVC',
        content: [
          'Integrating JDBC , Servlets And JSP'
        ]
      },

    ]
  },
  {
    id: 5,
    name: "Flutter",
    description: "A Complete Guide to the Flutter SDK &amp; Flutter Framework for building native iOS and Android apps",
    duration: "",
    img: Flutter,
    topics: [
      {
        id: 1,
        name: 'Introduction to Flutter',
        content: [
          'Importance of Flutter Introduction to Dart Writing Dart Code',
          'DartPad',
          'Installing Dart SDK',
          'IntelliJ IDEA',
          'Installing IntelliJ IDEA',
          'Creating a Dart Project Using IntelliJ IDEA',
          'Using DartPad',
        ]
      },
      {
        id: 2,
        name: 'Introduction To Dart',
        content: [
          'Intro to Dart',
          'Installing Visual Studio Code and the Dart Plugin',
          'Installing Dart SDK',
          'Writing the first Dart Program',
        ]
      },
      {
        id: 3,
        name: 'Dart Functions',
        content: [
          'Dart Functions',
          'Function Structure',
          'Creating a Function',
          'Function Return Data Types',
          'Void Function',
          'Function Returning Expression',
          'Functions and Variable Scope',
          'Object-Oriented Programming (OOP)',
          'Object',
          'Class',
          'Creating a Class',
          'Adding Methods to Classes',
          'Providing Constructors for Your Classes',
          'Class and Class Inheritance',
          'Abstract Class',
        ]
      },
      {
        id: 4,
        name: 'First Flutter App',
        content: [
          'Building an App From Scratch',
          'Running The App on Emulator',
          'Class Constructors & Named Arguments',
          'Deep Dive Basics Into Flutter App',
          'Building a Widget Tree',
          'Visible & Invisible Widgets',
          'Adding Layout Widgets',
        ]
      },
      {
        id: 5,
        name: 'Flutter Framework',
        content: [
          'Flutter Framework',
          'Android Studio',
          'Android Studio Software Prerequisite',
          'Installing Android Studio',
          'Flutter SDK',
          'Installing and Configuring Flutter SDK',
          'Creating a New Flutter Project',
          'Setup an Android Virtual Device',
          'Run a Flutter App',
          'Installing Flutter on Mac',
          'Test Your Flutter App on iOS Phone with Windows O.S',
          'Android Studio Sugar and Spice',
          'Run your Apps on a Hardware Device',
          'Run your Flutter App on Android Phone',
          'Emulator Debug Mode',
          'Introduction to Flutter Widgets',
          'Creating a Flutter App Using Widgets',
          'MaterialApp Widgets',
        ]
      },
      {
        id: 6,
        name: 'Flutter Widgets',
        content: [
          'Scaffold Widget',
          'Image Widget',
          'Container Widget',
          'Column and Row Widgets',
          'Icon Widget',
          'Layouts in Flutter',
          'Card Widget',
          'App Icons for iOS and Android Apps',
          'Hot Reload and Hot Restart',
          'Stateful and Stateless Widgets',
          'Use a Custom Font'
        ]
      },
      {
        id: 7,
        name: 'Navigation & Routing',
        content: [
          'Button Widget',
          'FloatingActionButton',
          'RaisedButton, FlatButton, and IconButton',
          'DropdownButton & OutlineButton',
          'ButtonBar',
          'PopupMenuButton',
          'App Structure and Navigation',
          'Navigate to a New Screen and Back',
          'Navigate with Named Routes',
          'Send and Return Data Among Screens',
          'Animate a Widget Across Screens',
          'WebView Widget in Flutter',
        ]
      },
      {
        id: 8,
        name: 'Widgets Implementation',
        content: [
          'Introduction',
          'BottomNavigatorBar Widget',
          'DefaultTabController, TabBar, and TabBarView Widgets',
          'ListTile Widget, ListView Widget, Drawer Widget, DataTable Widget, SelectableText Widget and Stack Widget',
          'Input and Selections',
          'Text Field Widget',
          'Checkbox Group and RadioButtonGroup Widgets',
          'Date Picker & Time Picker',
          'Slider Widget & Switch Widget',
          'Dialogs, Alerts, and Panels',
          'Alert Dialog Widget',
          'Cupertino Alert Dialog Widget',
          'Bottom Sheet, Modal Bottom Sheet & Persistent Bottom Sheet',
          'Expansion Panel Widget & Snack Bar Widget'
        ]
      },
      {
        id: 9,
        name: 'Firebase',
        content: [
          'Introduction',
          'JSON',
          'Firebase Database',
          'Firebase Authentication',
          'Configure Your App to use Firebase Services',
          'Adding Firebase to your Android App',
          'Adding Firebase to your iOS App',
          'Configuring Firebase Authentication',
          'Login to an App Using Firebase User Accounts',
          'Logout Configuration',
          'Firebase Database',
          'Real Time Database',
          'Cloud Firestore',
        ]
      },
      {
        id: 10,
        name: 'Location Aware Apps',
        content: [
          'Introduction',
          'GPS',
          'Camera Position',
          'Adding Google Maps to a Flutter app',
          'Getting a Google API key',
          'Adding Google Maps Flutter plug-in as a dependency',
          'Adding your API key for your Android app',
          'Adding your API key for your iOS app',
          'Adding a Google Map on Your Flutter App Screen',
          'Adding a Google Map Marker',
          'Google Map Types',
          'Camera Animation',
          'Capturing an App User’s Location for iOS and Android Apps',
          'Getting a Google API key',
          'Creating an App Interface',
          'Configuring your App to Use Your API Key',
          'Adding a Google Map on your Flutter App Screen',
          'Adding a Google Map Marker',
          'Flutter TM Application Development',
          'Capturing Users’ Location',
          'Configuring User App’s Permission'
        ]
      },
      {
        id: 11,
        name: 'User Interface',
        content: [
          'Applying Theme Data',
          'The Basic Screen Layout',
          'Applying Custom Font',
        ]
      },
      {
        id: 12,
        name: 'Asynchronous Functions',
        content: [
          'Function',
          'Async and Await'
        ]
      },
      {
        id: 13,
        name: 'Working With Remote Data',
        content: [
          'The ‘http’ Package',
          'Model Class and JSON Parsing',
          'Displaying Remote Data'
        ]
      },
      {
        id: 14,
        name: 'Using 3rd Party Packages',
        content: [
          'The ‘url_launcher’ Package',
          'Adding onTap() to NEWS API'
        ]
      },
      {
        id: 15,
        name: 'Other Useful Widgets',
        content: [
          "Grid View",
          "The ‘Hero’ Animation",
          "Stack",
          "‘Alert Dialog’ with Buttons"
        ]
      },
      {
        id: 16,
        name: 'User Interface',
        content: [
          'Applying Theme Data',
          'The Basic Screen Layout',
          'Applying Custom Font'
        ]
      },
      {
        id: 17,
        name: 'Publishing and App Testing',
        content: [
          'Testing and Feedback for Your App',
          'Setting up a Test Environment',
          'Usability Testing by Participants',
          'Starting your Test Session',
          'Analyzing your Test',
          'Publishing Flutter Apps',
          'Publishing Android App on Google Play Store',
          'Publishing iOS app on Apple Store'
        ]
      }
    ]
  },

]

export const getCourses = () => courses;
export const getById = (id) => {
  return courses.find((course) => course.id === id);
};