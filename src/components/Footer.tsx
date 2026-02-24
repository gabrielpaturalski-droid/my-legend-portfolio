const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} João Silva. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
