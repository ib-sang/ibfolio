import React from 'react';

import img from "./../../../../assets/images/list.png";

const SimpleOne = () => {
    return (
        <div className="cv_one">
            <h1 className="title">Curriculum Vitae</h1>
            <div className="cv_about">
                <div className="title_name">IbRAhima Baba Sangaré</div>
                <div className="cv_about_body">
                    <div className="cv_about_items">
                        <span className="cv_about_item">Adresse:</span>
                        <span>Yirmadjo</span>
                    </div>
                    <div className="cv_about_items">
                        <span className="cv_about_item">Téléphone:</span>
                        <span>91 92 32 37</span>
                    </div>
                    <div className="cv_about_items">
                        <span className="cv_about_item">Email:</span>
                        <span>sibrahima250@gmail.com</span>
                    </div>
                    <div className="cv_about_title">INGENIEUR EN TELECOMMUNICATION option RESEAU et INFORMATIQUE</div>
                </div>

                <div className="cv_about_foot">
                    <p>Disponible, mobile et dynamique pour participer à la meilleure production de l’entreprise. Je suis à la recherche d’un Stage pratique dans un post de sécurité et administration réseau.</p>

                </div>
                
            </div>
            <div className="cv_skill">
                <h2 className="cv_skill_title">Expériences professionnelles:</h2>
                <div className="cv_skill_item">
                    <div className="cv_skill_date">Février à Septembre 2020</div>
                    <ul className="cv_lists">
                        <li className=" cv_list cv_skill_job">
                            <div className="cv_media">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list cv_skill_list_t">Projet fin d’étude</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">L’automatisation et l’approvisionnement d’un réseau de fournisseur de service MPLS avec Ansible</div>
                        </li>
                    </ul>
                </div>
                <div className="cv_skill_item">
                    <div className="cv_skill_date">16-02-2020 à 28-03-2020</div>
                    <ul className="cv_lists">
                        <li className=" cv_list cv_skill_job">
                            <div className="cv_media">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list cv_skill_list_t">Stage de fin d’étude</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Lieux du stage : Hasnaoui Telecom Algérie </div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Poste : Intégration DevOP</div>
                        </li>
                    </ul>
                </div>
                <div className="cv_skill_item">
                    <div className="cv_skill_date">15-07-2019 à 04-08-2019</div>
                    <ul className="cv_lists">
                        <li className=" cv_list cv_skill_job">
                            <div className="cv_media">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list cv_skill_list_t">Stage d’été</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Lieux du stage : Hasnaoui Telecom Algérie</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Poste : Sécurité et administration réseau</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cv_work">
                <h2 className="cv_skill_title">Formations professionnelles:</h2>
                <div className="cv_skill_item">
                    <div className="cv_skill_date">2015-2020</div>
                    <ul className="cv_lists">
                        <li className=" cv_list cv_skill_job">
                            <div className="cv_media">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list cv_skill_list_t">Ingénieur d’Etat en Télécommunication</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Institut National des Télécommunications et des Technologies de l’Informations et de la Communication</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list"><span className="cv_skill_diplome">Spécialité ou Diplome:</span>Réseau et Informatique </div>
                        </li>
                    </ul>
                </div>
                <div className="cv_skill_item">
                    <div className="cv_skill_date">2014-2015</div>
                    <ul className="cv_lists">
                        <li className=" cv_list cv_skill_job">
                            <div className="cv_media">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list cv_skill_list_t">Baccalauréat en science exacte</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Lycée Baminata Coulibaly</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cv_competence">
                <h2 className="cv_skill_title">Compétences :</h2>
                <div className="cv_skill_item">
                    <ul className="cv_lists">
                        
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Développement : Web et logiciel</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Base de données</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cv_divers">
                <h2 className="cv_skill_title">Divers:</h2>
                <div className="cv_skill_item">
                    <ul className="cv_lists">
                        
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Langues : Français Très bien, Anglais moyen</div>
                        </li>
                        <li className="cv_skill_job">
                            <div className="cv_media cv_list">
                                <img src={img} alt="" className="cv_img" />
                            </div>
                            <div className="cv_list">Loisirs : Sport, Cinéma, Lecture, Musique</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SimpleOne
