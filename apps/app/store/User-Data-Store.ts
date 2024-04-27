import { create } from "zustand";

export type Task = {
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
  emailVerify: string;
  userName: string;
  userGender: string;
  userCity: string;
  userBirth: string;
  userFavourite: string[];
  userImageUrl: string;
  userSelection: string[];
};

type UserDataStore = Task & {
  updateUserName: (newUserName: string) => void;

  updateUserImageUrl: (newUserImageUrl: string) => void;

  updateUserEmail: (newUserEmail: string) => void;

  updateUserEmailVerify: (newUserEmailVerify: string) => void;

  updateUserPassword: (newUserPassword: string) => void;

  updateUserConfirmPassword: (newUserConfirmPassword: string) => void;

  updateUserTermsAccepted: (userTermsAccepted: boolean) => void;

  updateUserGender: (newUserGender: string) => void;

  updateUserCity: (newUserCity: string) => void;

  updateUserSelectionT3: (newUserSelction: string[]) => void;

  updateUserFavourite: (newUserFavourite: string[]) => void;

  updateUserBirthday: (newUserBirthday: string) => void;
};

export const userDataStore = create<UserDataStore>((set) => ({
  userName: "",
  email: "",
  emailVerify: "",
  userGender: "",
  userCity: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
  userBirth: "",
  userFavourite: [],
  userSelection: [],
  userImageUrl: "",

  updateUserName: (newUserName: string) =>
    set((state) => ({
      ...state,
      userName: newUserName,
    })),
  updateUserImageUrl: (newUserImageUrl: string) =>
    set((state) => ({
      ...state,
      userImageUrl: newUserImageUrl,
    })),
  updateUserEmail: (newUserEmail: string) =>
    set((state) => ({ ...state, email: newUserEmail })),
  updateUserEmailVerify: (newUserEmailVerify: string) =>
    set((state) => ({
      ...state,
      emailVerify: newUserEmailVerify,
    })),
  updateUserPassword: (newUserPassword: string) =>
    set((state) => ({
      ...state,
      password: newUserPassword,
    })),
  updateUserConfirmPassword: (newUserConfirmPassword: string) =>
    set((state) => ({
      ...state,
      confirmPassword: newUserConfirmPassword,
    })),
  updateUserTermsAccepted: (userTermsAccepted: boolean) =>
    set((state) => ({
      ...state,
      termsAccepted: userTermsAccepted,
    })),
  updateUserGender: (newUserGender: string) =>
    set((state) => ({
      ...state,
      userGender: newUserGender,
    })),
  updateUserCity: (newUserCity: string) =>
    set((state) => ({
      ...state,
      userCity: newUserCity,
    })),
  updateUserSelectionT3: (newUserSelction: string[]) =>
    set((state) => ({
      ...state,
      userSelection: newUserSelction,
    })),
  updateUserFavourite: (newUserFavourite: string[]) =>
    set((state) => ({
      ...state,
      userFavourite: newUserFavourite,
    })),
  updateUserBirthday: (newUserBithday: string) =>
    set((state) => ({
      ...state,
      userBirth: newUserBithday,
    })),
}));
