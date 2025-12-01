export interface ContentOption {
  title: string;
  content: string;
  image: string;
  imageUrl: string;
}

export interface ContentData {
  name: string;
  description: string;
  options: {
    'New Opportunities': ContentOption;
    'Challenges and Dangers': ContentOption;
    'View Artifact': ContentOption;
  };
}

export const contentData: Record<string, ContentData> = {
  Agriculture: {
    name: 'Ransom and Sarah Williams',
    description:
      "Before Emancipation, Ransom Williams (ca. 1846–1901) was enslaved by the Bunton family in Mountain City, Texas. By 1871, he purchased 45 acres of land near Bear Creek in Travis County. Four years later, he married Sarah Houston. Together, they ran a successful farm that produced food to sustain their family and cotton to sell for profit. The Williams earned enough to start a horse raising business, buy fine goods, and invest in their children's education.",
    options: {
      'New Opportunities': {
        title: 'New Opportunities',
        content:
          "Landowners exploited the labor of Black Texans to limit their financial freedom. Apprenticeship and tenant farming laws allowed landowners to trap workers in contracts that tied them to the land. By owning his property, Ransom kept all the profits of his work. Financial success allowed Ransom and Sarah to better their family's quality of life and education.",
        image:
          'Family and ox cart in front of house, ca. 1888 // Courtesy The Valentine, Richmond, Virginia',
        imageUrl: '',
      },
      'Challenges and Dangers': {
        title: 'Challenges and Dangers',
        content:
          'After Ransom died, Sarah and her children remained on the farm four more years. But life in rural Texas offered limited job options and increased exposure to racial violence. Legislators actively worked to remove protections for Black Texans. The Williams family ultimately moved to a freedom colony in East Austin.',
        image: 'Downtown Austin, 1920 // Courtesy of The Austin History Center',
        imageUrl: '',
      },
      'View Artifact': {
        title: 'View Artifact',
        content:
          'Williams registered his horse brand, "RA," in Travis County in April 1872. This fragment found on the Williams Farmstead matches the brand he filed with the county.',
        image:
          'Courtesy Texas Archaeological Research Laboratory, The University of Texas at Austin',
        imageUrl: '',
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
      name: 'Community/Religious Leadership',
      imageUrl: '/categories/community-religious-leadership.png',
    },
    { name: 'Agriculture', imageUrl: '/categories/agriculture.png' },
    { name: 'Politics', imageUrl: '/categories/politics.png' },
    { name: 'Education', imageUrl: '/categories/education.png' },
    { name: 'Entrepreneurship', imageUrl: '/categories/entrepreneurship.png' },
  ],
};
