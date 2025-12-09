export default function ContactEditor({ initial = {}, onCancel, onSave }: Props) {
    const [form, setForm] = React.useState<Partial<Contact>>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        notes: "",
        ...initial,
    });

    function set<K extends keyof Contact>(key: K, v: Contact[K]) {
        setForm(prev => ({ ...prev, [key]: v }));
    }

    const valid = (form.first_name?.trim() && form.last_name?.trim());

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>{initial?.id ? "Edit contact" : "Add contact"}</h3>
                <p className="form-subtitle">
                    Fill in the key details so you can easily find and reach this contact later.
                </p>

                {/* BASIC INFO */}
                <h4 className="section-title">Basic info</h4>
                <div className="section-block">
                    <div className="field">
                        <label className="field-label">First name *</label>
                        <input
                            className="input"
                            value={form.first_name || ""}
                            onChange={e => set("first_name", e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="field-label">Last name *</label>
                        <input
                            className="input"
                            value={form.last_name || ""}
                            onChange={e => set("last_name", e.target.value)}
                        />
                    </div>
                </div>

                {/* CONTACT DETAILS */}
                <h4 className="section-title">Contact details</h4>
                <div className="section-block">
                    <div className="field">
                        <label className="field-label">Email</label>
                        <input
                            className="input"
                            type="email"
                            placeholder="name@example.com"
                            value={form.email || ""}
                            onChange={e => set("email", e.target.value as any)}
                        />
                    </div>
                    <div className="field">
                        <label className="field-label">Phone</label>
                        <input
                            className="input"
                            placeholder="+386 ..."
                            value={form.phone || ""}
                            onChange={e => set("phone", e.target.value as any)}
                        />
                    </div>
                </div>

                {/* COMPANY & NOTES */}
                <h4 className="section-title">Additional info</h4>
                <div className="section-block">
                    <div className="field">
                        <label className="field-label">Company</label>
                        <input
                            className="input"
                            value={form.company || ""}
                            onChange={e => set("company", e.target.value as any)}
                        />
                    </div>
                    <div className="field">
                        <label className="field-label">Notes</label>
                        <textarea
                            className="textarea"
                            placeholder="E.g. how you met, important details..."
                            value={form.notes || ""}
                            onChange={e => set("notes", e.target.value as any)}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 20 }}>
                    <button className="button ghost" onClick={onCancel}>Cancel</button>
                    <button
                        className="button primary"
                        disabled={!valid}
                        onClick={() => onSave(form)}
                    >
                        {initial?.id ? "Save changes" : "Save contact"}
                    </button>
                </div>
            </div>
        </div>
    );
}