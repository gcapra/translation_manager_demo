import type { Project, Locale, Token, Translation } from './types';

const API_BASE_URL = 'https://langsys.flexmarkintl.com/api';

async function fetchLocales(): Promise<Locale[]> {
  /*const response = await fetch(`${API_BASE_URL}/projects`);
  return response.json();*/
  return  [
    { id: '0', locale: 'none', caption: '-- None --'},
    { id: '1', locale: 'en-us', caption: 'English (US)'},
    { id: '2', locale: 'en-uk', caption: 'English (UK)'},
    { id: '3', locale: 'es-cr', caption: 'Spanish (Costa Rica)'},
    { id: '4', locale: 'es-mx', caption: 'Spanish (Mexico)'},
    { id: '5', locale: 'es-sp', caption: 'Spanish (Spain)'},
    { id: '6', locale: 'it-it', caption: 'Italian (Italy)'},
  ]
}

async function fetchProjects(): Promise<Project[]> {
  /*const response = await fetch(`${API_BASE_URL}/projects`);
  return response.json();*/
  return  [
    { id: '0', name: '-- None --' },
    { id: '100', name: 'Website A' },
    { id: '101', name: 'Website B' },
    { id: '102', name: 'Website C' },
    { id: '103', name: 'Website D' },
    { id: '104', name: 'Website E' },
    { id: '105', name: 'Website F' }
  ];
}

async function fetchTokens(projectId: string): Promise<Token[]> {
  /*const response = await fetch(`${API_BASE_URL}/tokens/${projectId}`);
  return response.json();*/
  if (projectId === '100') {
    return [
      { id: '1', projectId: '100', category: 'header', value: 'Home', translated: false },
      { id: '2', projectId: '100', category: 'header', value: 'About Us', translated: true },
      { id: '3', projectId: '100', category: 'header', value: 'Contact' , translated: true},
      { id: '4', projectId: '100', category: 'footer', value: 'Privacy Policy' , translated: true},
      { id: '5', projectId: '100', category: 'footer', value: 'Terms of Service' , translated: true},
      { id: '6', projectId: '100', category: 'welcome', value: 'Dashboard', translated: true },
      { id: '7', projectId: '100', category: 'about', value: 'Settings' , translated: true},
      { id: '8', projectId: '100', category: 'mission', value: 'Profile' , translated: true},
      { id: '9', projectId: '100', category: 'vission', value: 'Privacy Policy' , translated: true},
      { id: '10', projectId: '100', category: 'footer', value: 'Terms of Service', translated: true }
    ];
  }
  else if (projectId === '101') {
    return [
      { id: '4', projectId: '101', category: 'footer', value: 'Privacy Policy', translated: true },
      { id: '5', projectId: '101', category: 'footer', value: 'Terms of Service', translated: true }
    ];
  }
  else if (projectId === '102') {
    return [ 
      { id: '6', projectId: '102', category: 'sidebar', value: 'Dashboard', translated: true },
      { id: '7', projectId: '102', category: 'sidebar', value: 'Settings', translated: true },
      { id: '8', projectId: '102', category: 'sidebar', value: 'Profile' , translated: true},
      { id: '4', projectId: '102', category: 'footer', value: 'Privacy Policy', translated: true },
      { id: '5', projectId: '102', category: 'footer', value: 'Terms of Service', translated: true }
    ];
  }
  else if (projectId === '103') {
    return [ 
      { id: '10', projectId: '103', category: 'content', value: 'Our Mission' },
      { id: '11', projectId: '103', category: 'content', value: 'Team Bios' },
      { id: '12', projectId: '103', category: 'content', value: 'Careers' },
    ];
  }
  else if  (projectId === '104') {
    return [
    { id: '9', projectId: '104', category: 'content', value: 'Welcome to Our Service' },
    { id: '10', projectId: '104', category: 'content', value: 'Our Mission' },
    { id: '11', projectId: '104', category: 'content', value: 'Team Bios' },
    { id: '12', projectId: '104', category: 'content', value: 'Careers' }
  ];
}
else{
  return [];
}
}

async function saveTranslation(tokenID: string, language:string, translation: string): Promise<Boolean> {
    const response = await fetch(`${API_BASE_URL}/string/${tokenID}`);
    return response.json();
  }


async function fetchTranslations(tokenID: string, localeId: string): Promise<Translation> {
  console.log('tokenID: ' + tokenID + ' localeId: ' + localeId);
  if(tokenID === '1' && localeId === '3')
    return {tokenId: '1', localeId: '3', translation: ''};
  else if (tokenID === '2' && localeId === '3')
    return {tokenId: '2', localeId: '3', translation: 'Acerca de Nosotros'};
  else if (tokenID === '3' && localeId === '3')
    return {tokenId: '3', localeId: '3', translation: 'Contacto'};
  else return {tokenId: '0',localeId: '0', translation: ''};  
 // }
 // else return {};
}

export { fetchLocales, fetchProjects, fetchTokens, saveTranslation, fetchTranslations };