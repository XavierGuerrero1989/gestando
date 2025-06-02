import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';


function RelacionRow() {

  const { t } = useTranslation();

  return (
    <div className="row align-items-center mainRowR">
        <div className="col-md-6 text-center">
            <h1>{t('homeUltimoRowTitulo')}</h1>
            <p>{t('homeUltimoRowTexto')}</p>
        </div>
        <div className="col-md-6 text-center">
        
        </div>
    </div>
  );
}

export default RelacionRow;