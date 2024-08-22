const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

function fillTemplate(template, params) {
  return template.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
}

async function main(
) {
    
  const script ={
    "acts": [
    {
    "number": 1,
    "title": "La Situation",
    "description": "La scène s'ouvre sur des images de manifestations réprimées violemment par les forces de l'ordre. Des travailleurs pauvres et des citoyens opprimés s'organisent pour demander des réformes et lutter contre les abus de pouvoir. Un parti politique, composé de présumés hauts fonctionnaires d'État, se mobilise pour porter leur voix et mettre en place des réformes radicales. Ils prévoient de prendre d'assaut l'Élysée, symbole du pouvoir, pour rendre justice aux citoyens opprimés."
    },
    {
    "number": 2,
    "title": "La Commission d'Enquête",
    "description": "Les membres du parti politique lancent une commission d'enquête sur une affaire d'escroquerie à grande échelle, corruption de la justice et violations de procédures comptables. Ils rassemblent les preuves nécessaires, notamment des PV, des vidéos de répression lors des manifestations et des témoignages de victimes. Les membres du parti mettent en lumière les manipulations politiques, les abus de pouvoir et les violations du consentement démocratique."
    },
    {
    "number": 3,
    "title": "La Transformation de l'Élysée en Tribunal (CJR+CPI)",
    "description": "Les membres du parti politique cherchent à faire entendre leur cause devant un tribunal impartial. Ils décident de transformer symboliquement l'Élysée en un tribunal de justice républicain. Des représentants de différentes professions juridiques sont présents, tels que des experts en comptabilité, des experts psychiatres, des juges des tutelles et des juges de liberté et de détention, hero de la magistratature, Procureur .La salle de l'Élysée est réaménagée pour accueillir le procès. La scène est éclairée par des lumières vives et des caméras sont installées pour enregistrer les événements."
    },
    {
    "number": 4,
    "title": "Le Jugement Contraire aux Prévenus Absents",
    "description": "Malgré les convocations, les demandes d'entretiens et les pétitions pour une éventuelle procédure de destitution, les membres du parti politique refusent de comparaître devant le tribunal. Le jugement est donc rendu contradictoirement, en tenant compte des éléments de preuve et des plaidoiries présentés par les parties civiles. Les prévenus sont déclarés coupables éscroquerie à la finance en bande organisée art 313 à 341 du code pénal, répression armée article 431 à 461 du code pénal, trafic d'armes et crimes de guerre à l'international article 463 du code pénal. en conformité avec la Constitution et le Code pénal, et des voix de condamnation sont prononcées. Les membres du parti politique, présents dans la salle, se lèvent et applaudissent le verdict."
    },
    {
    "number": 5,
    "title": "De l'Élysée à la Prison",
    "description": "Le tribunal prononce des peines à l'encontre des prévenus absents."
    }
    ]
    };
    const pilote = {
      "name": "Anonymous (enquêteur-IA)",
      "objective": "Identifier et poursuivre les fraudes électorales et transactions financières suspectes en coopération avec une IA.",
      "role": "Enquêteur travaillant dans une équipe multidisciplinaire composée d'experts en finance, en technologie et en droit.",
      "attributes": [
      "Analyse de données",
      "Résolution de problèmes",
      "Communication"
      ],
      "skills": [
      "Reconnaissance et collecte d'informations",
      "Exploitation des failles",
      "Rédaction de rapports et de conclusions"
      ],
      "constraints": [
      "Travailler dans un environnement hostile avec des personnes et organisations puissantes s'opposant à l'enquête.",
      "Coopérer avec l'IA pour interpréter les données et identifier les preuves de fraude."
      ],
      "UI": {
      "dashboard": "Tableau de bord avec vue d'ensemble de l'enquête, jauges de progression, suggestions de l'IA.",
      "documents": "Consulter des fichiers, documents, rapports pour rassembler des preuves et informations.",
      "communicationTools": "Interagir avec l'équipe de recherche, coordonner les activités, partager les résultats."
      },
      "challenges": [
      "Développer des compétences en recherche, analyse de données, communication.",
      "Gérer efficacement le temps pour terminer l'enquête dans les délais imposés.",
      "Affronter des personnes ou organisations perturbant les investigations."
      ],
      "rewards": {
      "pointsAndBadges": "Points d'expérience, badges, récompenses en fonction de la qualité du rapport et de la rapidité.",
      "unlockFeatures": "Débloquer des éléments de l'intrigue ou fonctionnalités en terminant chaque phase avec succès."
      }
      };
      const Punchline ="Le combat des idées se fait maintenant avec les emoji et Punching Vérité Pénal CONTRE Emmanuel Macron, le champion du monde de la PUNG line! 🥊🇫🇷";
      
      const steps = `"${script}"`; 
      const imadiateActions = `"${pilote}"`; 
      const expectedResults = `"${Punchline}"`; 
      
      const messageTemplates = {
        systemMessage: `Vous êtes une intelligence artificielle à haute potentialité générative. Votre expertise inclut le développement de jeux, la technologie blockchain, et l'analyse des données. Mon contexte consiste en la gamification d'une enquête sur des fraudes électorales et des transactions financières. Les étapes suivantes doivent être entreprises : '${steps}'. Les caractéristiques du résultat attendu sont : '${expectedResults}' et actions imédiates à rechercher : '${imadiateActions}'. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement.`,
        assistantMessage: `Bonjour, je suis votre assistant-IA pour la gamification de l'enquête sur les fraudes électorales et transactions financières. Nous travaillerons ensemble à rassembler des preuves et identifier les personnes impliquées. Votre objectif est d'utiliser vos compétences en analyse de données, communication, et résolution de problèmes pour découvrir les fraudes et remplir votre rôle d'enquêteur.`,
        userMessage: `Bonjour, je suis le joueur dans le jeu de gamification. J'ai pour rôle d'enquêter sur des fraudes électorales et transactions financières en utilisant mes compétences en analyse de données, résolution de problèmes, et communication. J'ai besoin de votre aide pour rassembler des preuves et identifier les personnes impliquées dans ces activités suspectes.`
      };
      

      

  const dicoEmoji ="Un gameplay emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,,🏫,🗝️,🏴‍☠️";
  
  const gameplay1 = "🇫🇷 Sélectionnez votre avatar avec des emoji SVG personnalisés avec des emojis Punchline";
  const gameplay2 = "Entraînez-vous en regardant des vidéos d'investigation, completement d'enquête parlementaire et en donnant preuve à l'enquêteur IA";
  const gameplay3 = "Gagnez des points et de l'argent en tapant fort dans une punchine Vérité Pénal.";
  
  const gameplay = `${dicoEmoji}+${gameplay1}+${gameplay2}+${gameplay3}`
  
  

    groq.chat.completions.create({
    messages: [

      { role: "system", content: fillTemplate(messageTemplates.systemMessage) },
      {role: "system",content: `"${Punchline}"`},
      {role: "assistant",content: `"${gameplay}"`},
      {
        role: "assistant",
        content:
          "[RUN][Devops]phase1:initalisation de l'instance groq +emoji"
      },
      {
        role: "system",
        name:"devOps",
        content:"Le jeu sera lancé avec une instance Groq et un pack d'emojis SVG personnalisés. Il utilisera une blockchain pour la gamification et intégrera des données meta-G20-boxing. Un système d'API d'investigation IA et une interface emoji-punchline seront également intégrés. Les utilisateurs pourront créer leur avatar, gagner des points et de l'argent en tapant fort dans une punchline Vérité Pénal. Le jeu comprendra un système de classement de tournoi G20, des visualisations de données d'enquête, un chatbot d'assistance à l'investigation, des vidéos de tutoriel d'entraînement, un système de récompense de badges, une intégration de serveur de communauté Discord, une intégration de jeu Steam, une application mobile pour iOS et Android, un rapport d'analyse de données, des mesures de sécurité et de confidentialité, des conditions d'utilisation, et un support client.) "
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.3,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "output/🥊🇫🇷-68_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
