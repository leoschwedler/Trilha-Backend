type Configuracao = {
  porta: number;
  host: string;
};

const config: Readonly<Configuracao> = {
  porta: 8080,
  host: "locahost",
};

//config.porta = 9090;
