import { SEO } from '@/src/components/SEO';

interface LegalProps {
  title: string;
  content: string;
}

export function LegalPage({ title, content }: LegalProps) {
  return (
    <div className="pt-48 pb-24 bg-brand-paper min-h-screen">
      <SEO title={`${title} | Olisipo Bistro`} />
      <div className="max-w-3xl mx-auto px-6">
        <span className="editorial-caps text-brand-terra mb-4 block">Informação Legal</span>
        <h1 className="editorial-heading text-6xl md:text-8xl text-brand-ink mb-16">{title}</h1>
        <div className="markdown-body font-sans leading-relaxed text-brand-ink/70">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}

export const PRIVACY_POLICY = `
  <h2>1. Introdução</h2>
  <p>No Olisipo Bistro, a sua privacidade é fundamental. Esta política explica como recolhemos e protegemos os seus dados quando utiliza o nosso site.</p>
  
  <h2>2. Dados Recolhidos</h2>
  <p>Recolhemos apenas os dados necessários para o processamento de reservas, tais como nome, telefone e email. Nunca partilhamos os seus dados com terceiros sem o seu consentimento.</p>
  
  <h2>3. Cookies</h2>
  <p>Utilizamos cookies estritamente necessários para melhorar a funcionalidade do site e ferramentas de análise anónimas como Vercel Speed Insights.</p>
  
  <h2>4. Contacto</h2>
  <p>Para qualquer questão sobre os seus dados, contacte-nos através de privacy@olisipobistro.com.</p>
`;

export const TERMS_CONDITIONS = `
  <h2>1. Reservas</h2>
  <p>As reservas estão sujeitas a confirmação por parte do bistro. Recomendamos a chegada com 15 minutos de antecedência.</p>
  
  <h2>2. Cancelamentos</h2>
  <p>Agradecemos o cancelamento com pelo menos 2 horas de antecedência para permitir que outros clientes possam usufruir da experiência.</p>
  
  <h2>3. Direitos de Propriedade</h2>
  <p>Todo o conteúdo deste site é propriedade do Olisipo Bistro e não pode ser reproduzido sem autorização prévia.</p>
  
  <h2>4. Jurisdição</h2>
  <p>Estes termos são regidos pela lei portuguesa e qualquer disputa será resolvida nos tribunais do Distrito de Lisboa.</p>
`;
