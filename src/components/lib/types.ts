// Define a type for Project, which might include any properties you expect a project to have
export interface Project {
    id: string;
    name: string;
    description?: string;
  }
  
  // Define a type for Token, which represents a translatable unit within a project
  export interface Token {
    id: string;
    value: string;
    projectId: string;
    category?: string;
    translated?: boolean;
  }
  
  // Define a type for a Translation, which includes the original text, the translated text, and the language
  export interface Translation {
    tokenId: string;
    localeId: string;
    translation: string;
  }
  
  // Optionally, you can define more complex or additional types related to user management, authentication, etc.
  export interface User {
    id: string;
    name: string;
    email: string;
  }

  export interface Locale {
    id: string;
    locale: string;
    caption:string;
  }
  
  // Define other relevant types here
  