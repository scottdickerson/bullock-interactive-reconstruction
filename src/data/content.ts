import { Category } from '../utils/categories';

export interface ContentOption {
  title: string;
  description: string;
  content: string;
  image: string;
  imageUrl: string;
}

export interface ArtifactOption {
  title: 'View Artifact';
  image: string;
  imageUrl: string;
}

export enum ContentDataOptionEnum {
  New_Opportunities = 'New Opportunities',
  Challenges_and_Dangers = 'Challenges and Dangers',
  View_Artifact = 'View Artifact',
}

export interface ContentData {
  name: string;
  description: string;
  options: {
    [ContentDataOptionEnum.New_Opportunities]: ContentOption;
    [ContentDataOptionEnum.Challenges_and_Dangers]: ContentOption;
    [ContentDataOptionEnum.View_Artifact]: ArtifactOption;
  };
}

export const isContentOption = (
  option: ContentOption | ArtifactOption
): option is ContentOption => {
  return (
    option.title === ContentDataOptionEnum.New_Opportunities ||
    option.title === ContentDataOptionEnum.Challenges_and_Dangers
  );
};

export const contentData: Record<string, ContentData> = {
  Agriculture: {
    name: 'Ransom and Sarah Williams',
    description:
      "Before Emancipation, Ransom Williams (ca. 1846–1901) was enslaved by the Bunton family in Mountain City, Texas. By 1871, he purchased 45 acres of land near Bear Creek in Travis County. Four years later, he married Sarah Houston. Together, they ran a successful farm that produced food to sustain their family and cotton to sell for profit. The Williams earned enough to start a horse raising business, buy fine goods, and invest in their children's education.",
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        description:
          'By growing crops and raising horses on their own land, the Williams family created a self-sufficient farm where they  could thrive.',
        content:
          "Some white landowners exploited the labor of Black Texans to limit their financial freedom. Apprenticeship and tenant farming laws allowed landowners to trap workers in contracts that tied them to the land. By owning his property, Ransom kept all the profits of his work. Financial success allowed Ransom and Sarah to better their family's quality of life and education.",
        image:
          'Family and ox cart in front of house, ca. 1888 // Courtesy The Valentine, Richmond, Virginia',
        imageUrl: '/agriculture/new-opportunities.png',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        description:
          'Racial violence was rampant in rural parts of Texas. Many Black families sought safety and opportunity among each other in urban centers.',
        content:
          'After Ransom died, Sarah and her children remained on the farm four more years. But life in rural Texas offered limited job options and a higher risk of exposure to racial violence. Legislators actively worked to remove protections for Black Texans. The Williams family ultimately moved to a freedom colony in East Austin.',
        image: 'Downtown Austin, 1920 // Courtesy of The Austin History Center',
        imageUrl: '/agriculture/challenges-and-dangers.png',
      },
      'View Artifact': {
        title: 'View Artifact',
        image:
          'Williams registered his horse brand, “RA,” in Travis County in April 1872. This fragment found on the Williams Farmstead matches the brand he filed with the county. Brand from Ransom’s farm // Courtesy Texas Archaeological Research Laboratory, The University of Texas at Austin',
        imageUrl: '/agriculture/view-artifact.png',
      },
    },
  },
  CommunityLeadership: {
    name: 'Nace Duval',
    description:
      'Nace Duval was a preacher, community leader, and businessman in San Antonio. In 1866, Duval organized the first Black Methodist congregations in Bexar County. The St. James and St. Paul churches were gathering places that met community needs. Within these spaces, Duval established a school and employment agency. Open to church members, the services helped advance education and job prospects. Duval also owned a barbershop on Soledad Street that served clients of any race.',
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        description:
          'Nace Duval created public spaces to express faith, exercise creativity, and build community.',
        content:
          'Black Texans had to navigate segregated spaces and find fair job opportunities. They came together safely at churches established by and for Black communities. As a preacher and respected community leader, Duval helped others find support, education, and jobs.',
        image:
          'Mount Zion Baptist Church, San Antonio, Texas // Courtesy General Photograph Collection, UTSA Special Collections, San Antonio',
        imageUrl: '/community-leadership/new-opportunities.png',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        description:
          'After the Civil War, the State Legislature passed a series of laws called the Black Codes. These laws restricted Black Texans rights, labor, and participation in public spaces.',
        content:
          'The Black Codes were the foundation for Jim Crow segregation laws. Despite owning his own business, Duval was forced to follow these rules to avoid being the target of violence. White customers entered his barbershop through the front door. Black and Tejano customers entered through the alleyway back door.',
        image:
          'Businesses in 500 block of East Commerce Street, San Antonio, Texas, 1917 // Courtesy General Photograph Collection, UTSA, San Antonio',
        imageUrl: '/community-leadership/challenges-and-dangers.png',
      },
      'View Artifact': {
        title: 'View Artifact',
        image:
          'This photograph looks out on Soledad Street near Main Plaza, the area where Duval ran his barbershop. Soledad Street, San Antonio, Texas, ca. 1870 // Courtesy General Photograph Collection, UTSA Libraries Special Collections, San Antonio',
        imageUrl: '/community-leadership/view-artifact.png',
      },
    },
  },
  Politics: {
    name: 'Richard Allen',
    description:
      "Richard Allen (ca. 1830-1909) was born enslaved in Richmond, Virginia and came to Texas with his enslaver J.J. Cain in 1837. Allen was a skilled carpenter who built Mayor Joseph R. Morris' mansion and the Buffalo Bayou bridge in Houston. After Emancipation, Allen became a federal voting registrar and agent with the Freedmen's Bureau. He represented the 14th District in the Twelfth Legislature and became the first Black man to run for Lt. Governor in 1878.",
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        description:
          'Richard Allen and other Black Texans participated in state politics and redefined their rights as free people.',
        content:
          'Richard Allen was among the first Black men to serve as representatives in the Texas State Legislature. He sponsored laws to increase access to education and guarantee pension funds for veterans regardless of race. Allen also helped shape Texas’s infrastructure by leading the Roads and Bridges Committee.',
        image:
          'Portrait of Richard Allen // Courtesy General Photograph Collection, UTSA, San Antonio',
        imageUrl: '/politics/new-opportunities.png',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        description:
          'White lawmakers in the State Legislature worked to limit Black Texans’ rights and political engagement.',
        content:
          'Richard Allen won reelection to the Thirteenth Legislature in 1873. Gustave Cook, his white opponent, claimed that Allen’s Black voters were not properly registered. The State Legislature decided to seat Cook instead. In the following years, state-sanctioned discrimination and racial violence escalated. By 1879, Allen publicly urged Black Texans to move to Kansas for safety and better opportunity.',
        image:
          'Nicodemus Historic District, Graham County, KS // Courtesy Library of Congress, Washington, D.C.',
        imageUrl: '/politics/challenges-and-dangers.png',
      },
      'View Artifact': {
        title: 'View Artifact',
        image:
          'Allen signed this oath while serving in the Twelfth Legislature. Legislators were required to swear that they did not engage in insurrection while holding office. Oath of Office, April 26, 1870 // Courtesy Texas State Library and Archives Commission, Austin',
        imageUrl: '/politics/view-artifact.png',
      },
    },
  },
  Education: {
    name: 'Harriet Smith',
    description:
      "Harriet Smith learned to read and write while still enslaved in Wharton, Texas. In 1866, Colonel Dennis (likely her enslaver) hired her to teach the children of the tenant farmers on his plantation. Eventually, Smith asked the Freedmen’s Bureau to oversee the school. This transfer separated the 28 students from their former enslaver's oversight. Agency reports show that Smith was an excellent teacher skilled in geography, arithmetic, and ethics. She became the principal of a Freedmen's Bureau school for almost 100 students in Bryan by 1869.",
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        description:
          'Educational opportunities for Black Texans improved under Reconstruction. Harriet Smith, and others like her, made a difference by forming schools for Black education.',
        content:
          'Texas State law prohibited enslaved people from learning to read or write. Enslavers feared that education would make the people they held captive difficult to control. After Emancipation, the Freedmen‘s Bureau led efforts to found schools for Black Texans. Bureau records show that 150 schools enrolled 9,086 Black students across the state by 1870.',
        image:
          'African American School in Diboll, Texas with teacher J.W. Hogg and students // Courtesy University of North Texas Libraries, The Portal to Texas History, crediting the History Center, Diboll',
        imageUrl: '/education/new-opportunities.png',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        description:
          'Education opportunities for Black Texans improved after the Civil War, but white Texans still refused to see them as equal citizens.',
        content:
          'White legislators created laws called Black Codes to restrict Black Texans’ rights. These laws extended to education. Black schools were not able to access the state public school fund. Black students could not attend white institutions. These laws established segregated schools. Fewer resources were then allocated to schools serving Black students and those of Mexican descent. ',
        image:
          'Group of Black Students, 1870s // Courtesy University of North Texas Libraries, The Portal to Texas History, crediting Austin History Center, Austin Public Library',
        imageUrl: '/education/challenges-and-dangers.png',
      },
      'View Artifact': {
        title: 'View Artifact',
        image:
          'This report shows that Smith initially focused on teaching her 28 students (9 boys and 19 girls) to spell, read, and write. Report of School for Freedmen, June 1, 1866 // Courtesy National Museum of African American History and Culture',
        imageUrl: '/education/view-artifact.png',
      },
    },
  },
  Entrepreneurship: {
    name: 'Hope Thompson',
    description:
      "Hope Thompson (ca. 1826-1895) was born enslaved in South Carolina before owning property and a laundry business in Dallas. Thompson washed laundry for clients from her home. This allowed her to support her family after her husband, Isaac, left her in 1872. Thompson negotiated a $50 loan from one of her clients, William Henry Gaston, to buy property on the corner of Live Oak and Elm in Dallas. Thompson repaid the debt by washing Gaston's clothes and continued to build her property investments. By 1885, Thompson's real estate was worth $35,000.",
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        description:
          'Freedom brought Black Texans like Hope Thompson the opportunity to choose their profession and build wealth.',
        content:
          'The Texas Constitutional Convention of 1866 granted Black Texans the right to create contracts, sue, and hold property. Thompson exercised these rights when she established her own successful business. As the value of her property on Elm Street increased, Thompson faced many lawsuits over ownership. She won the final suit in 1884 and kept the title to her land.',
        image:
          'Elm Street, Dallas, Texas // Courtesy DeGolyer Library, Southern Methodist University, Dallas',
        imageUrl: '/entrepreneurship/new-opportunities.png',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        description:
          'Even though Black Texans could choose professions, they were paid less than people of other races for their work.',
        content:
          'Thompson was successful, but many other Black laundry women were unfairly paid for tough labor. Wage discrimination served as a tool of oppression. But Black Texans created their own paths forward. In 1877, Black domestic workers in Galveston organized a strike to demand better wages. Washerwomen, cooks, and servants banded together to seek change. Their collective action was part of a growing labor movement in Texas.',
        image:
          'African American woman doing laundry // Courtesy Library of Congress, Washington, D.C.',
        imageUrl: '/entrepreneurship/challenges-and-dangers.png',
      },
      'View Artifact': {
        title: 'View Artifact',
        image:
          'This entry recognizes Isaac and Hope Thompson’s joint purchase of land from W. L. and Lou Williams. The property remained in Hope’s possession as she continued to build her investments after Isaac left. Dallas County Deed Index, vol. 53 p. 210, April 29, 1871 // Courtesy Dallas County Records Department',
        imageUrl: '/entrepreneurship/view-artifact.png',
      },
    },
  },
};

export const selectScreenData = {
  name: 'Reconstruction Era Texans',
  description:
    'With freedom came the opportunity for Black Texans to choose their paths in life.',
  details:
    'Many Black Texans continued working in agriculture, purchasing or leasing land. Others pursued a formal education or ran for public office. Faced with hostility and violence from white Texans, Black Texans created spaces for community and free expression.',
  detailsLine2:
    'Select a topic to learn about a person who pursued that path and how their rights shifted throughout Reconstruction.',
  categories: [
    {
      name: Category.CommunityLeadership,
      imageUrl: '/categories/community-leadership.png',
    },
    { name: Category.Agriculture, imageUrl: '/categories/agriculture.png' },
    { name: Category.Politics, imageUrl: '/categories/politics.png' },
    { name: Category.Education, imageUrl: '/categories/education.png' },
    {
      name: Category.Entrepreneurship,
      imageUrl: '/categories/entrepreneurship.png',
    },
  ],
};
