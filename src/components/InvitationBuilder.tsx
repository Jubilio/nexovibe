"use client";
import { useState } from "react";
import ContactForm from "@/components/ui/ContactForm";
import { invitationPackages, invitationPricingNote, formatInvitationPrice, type InvitationPackageId } from "@/lib/invitations";
import styles from "@/app/convites/convites.module.css";

export default function InvitationBuilder() {
  const [selectedId, setSelectedId] = useState<InvitationPackageId>("essencial");
  const selected = invitationPackages.find((item) => item.id === selectedId)!;
  return <>
    <section id="pacotes" className={`container ${styles.section}`}>
      <p className="eyebrow">ESCOLHE COMO QUERES CONVIDAR</p><h2>Um formato para cada celebração.</h2>
      <p className={styles.intro}>Selecciona o pacote para consultar o preço e preparar o teu pedido.</p>
      <p className={styles.notice}>Preços negociáveis conforme as necessidades do teu evento. Partilha a tua ideia e o teu orçamento para encontrarmos a solução adequada.</p>
      <fieldset className={styles.packages}><legend className={styles.srOnly}>Pacote de convite</legend>
        {invitationPackages.map((item) => <label key={item.id} className={`${styles.package} ${selectedId === item.id ? styles.selected : ""}`}>
          <span className={styles.packageTop}><span>{item.format}</span><input type="radio" name="invitation-package" value={item.id} checked={selectedId === item.id} onChange={() => setSelectedId(item.id)} /></span>
          <h3>{item.name}</h3><p>{item.description}</p>
          <div className={styles.price}>{formatInvitationPrice(item.price)}<small>preço de referência · negociável</small></div>
          <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
          <span className={styles.selection}>{selectedId === item.id ? "✓ Pacote seleccionado" : "Seleccionar pacote"}</span>
        </label>)}
      </fieldset>
    </section>
    <section id="pedido" className={`container ${styles.request}`}>
      <aside className={styles.summary}>
        <p className="eyebrow">O TEU CONVITE COMEÇA AQUI</p><h2>Vamos dar vida<br />à tua ideia?</h2>
        <div aria-live="polite" aria-atomic="true" className={styles.quote}>
          <span>O TEU PACOTE</span><h3>{selected.name}</h3><strong>{formatInvitationPrice(selected.price)}</strong>
          <p>{invitationPricingNote}</p><p>{selected.terms}</p>
        </div>
        <a href="#pacotes" className="text-link">Alterar pacote ↑</a>
        <p className={styles.caption}>Envia a tua ideia. Respondemos com uma proposta, os prazos e os próximos passos. Sem pagamento nesta etapa.</p>
      </aside>
      <ContactForm invitationPackage={selectedId} />
    </section>
  </>;
}
