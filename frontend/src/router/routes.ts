export const routes = {
  home: () => "/",
  robotList: () => "/robots",
  robot: (id: string) => `/robots/show/${id}`,
  robotCreate: () => "/robots/create",
  robotEdit: (id: string) => `/robots/${id}/edit`,
};
