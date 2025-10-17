import { useRef, useState } from "react";
import { Crossicon } from "../icons/Crossicon";
import { Button } from "./Buttons";
import { Inputfield } from "./Inputfield";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleref = useRef<HTMLInputElement>(null);
    const linkref = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleref.current?.value;
        const link = linkref.current?.value;
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            return;
        }

        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`,
                { title, link, type },
                {
                    headers: {
                        token,
                    },
                }
            );
            alert("Content added successfully!");
            onClose(); // Optionally close the modal after submission
        } catch (error) {
            console.error("Error adding content:", error);
            alert("Failed to add content.");
        }
    }

    return (
        <div>
            {open && (
                <div>
                    <div className="w-screen h-screen fixed bg-slate-800 opacity-40 flex justify-center" />

                    <div className="w-screen h-screen fixed flex justify-center">
                        <div className="flex flex-col justify-center">
                            <div className="bg-white rounded-md opacity-100">

                                {/* Cross Icon */}
                                <div className="flex justify-end pt-2 px-2">
                                    <div className="cursor-pointer" onClick={onClose}>
                                        <Crossicon />
                                    </div>
                                </div>

                                {/* Input Fields */}
                                <div className="py-1 px-6">
                                    <Inputfield reference={titleref} placeholder="Enter Title" />
                                    <Inputfield reference={linkref} placeholder="Enter Link" />
                                </div>

                                {/* Type Buttons */}
                                <div className="flex justify-center gap-4 p-2">
                                    <Button
                                        title="Youtube"
                                        variant={type === ContentType.Youtube ? "Primary" : "Secondary"}
                                        onClick={() => setType(ContentType.Youtube)}
                                    />
                                    <Button
                                        title="Twitter"
                                        variant={type === ContentType.Twitter ? "Primary" : "Secondary"}
                                        onClick={() => setType(ContentType.Twitter)}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pb-3">
                                    <Button onClick={addContent} title="Submit" variant="Primary" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
