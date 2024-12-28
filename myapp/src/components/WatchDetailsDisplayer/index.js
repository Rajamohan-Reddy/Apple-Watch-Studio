import React, { Component } from "react";
import Header from "../Header";
import WatchCaseSlider from "../WatchCaseSlider";
import WatchSizesSlider from "../WatchSizesSlider";
import WatchBandSlider from "../WatchBandSlider";
import WatchSize from "../WatchSize";
import WatchCase from "../WatchCase";
import WatchBand from "../WatchBand";
import "./index.css";

const watchDetails = [
  {
    id: 0,
    frontViewBand:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    frontViewCase:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
    sideView:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2t1bnExRnFNdEtwODg0U2VzTVNiWjNqbENGcEFFTlJVaXJwL2VzdGxEMU9NU1VZS1dIdzdkNjZzejNRdFdUZzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXVoSHlqYUY2YWdsek45M29HTWxyVHhWNEM0ZHZzMzMzajJiOGZuamRiTE9vd244Uy9uZVBMWExUVnVOTDZqcWVYWktMOUF6cmN5SDFRZExjLzZRR3NvZVBpbmE4U0VxZC94d1Y1L0ZOTkpUZw",
    name: "APPLE WATCH SERIES 10",
    description: "46mm Jet Black Aluminum Case with Black Solo Loop",
    price: "From $429",
  },
  {
    id: 1,
    frontViewBand:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
    frontViewCase:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
    sideView:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
    name: "APPLE WATCH HERMÈS SERIES 10",
    description: "46mm Silver Titanium Case with Satiné Grand H",
    price: "$1,949.00",
  },
  {
    id: 2,
    frontViewBand:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
    frontViewCase:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    sideView:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
    name: "APPLE WATCH SE",
    description: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
    price: "From $279",
  },
];

const activeSizesList = {
  appleSeries10: [
    {
      id: 1,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2t1bnExRnFNdEtwODg0U2VzTVNiWjNqbENGcEFFTlJVaXJwL2VzdGxEMU9NU1VZS1dIdzdkNjZzejNRdFdUZzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXVoSHlqYUY2YWdsek45M29HTWxyVHhWNEM0ZHZzMzMzajJiOGZuamRiTE9vd244Uy9uZVBMWExUVnVOTDZqcWVYWktMOUF6cmN5SDFRZExjLzZRR3NvZVBpbmE4U0VxZC94d1Y1L0ZOTkpUZw",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY7N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=V0p1YnJBTzdtN2g0SkpiRThzUmdWenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      price: "From $399",
      name: "APPLE WATCH SERIES 10",
      description: "42mm Jet Black Aluminum Case with Black Solo Loop",
    },
    {
      id: 2,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      price: "From $429",
      name: "APPLE WATCH SERIES 10",
      description: "46mm Jet Black Aluminum Case with Black Solo Loop",
    },
  ],
  appleHermes10: [
    {
      id: 1,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJT3ref_VW_34FR+watch-case-42-titanium-silver-cell-hermes10s_VW_34FR+watch-face-42-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=d0lCNDJjaW9NaktFYmJWZTNRTzYwelRQWjVnOW42VlFselAva2taNEJxK0NHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUxWY0dtV1RGS3hYcUNlWGM0SW11czBUSHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-titanium-silver-cell-hermes10s_VW_PF+watch-face-42-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MWF5bnRSQ0xkL2IyaVkvcXV5Rmd4bG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaFZNbGZBblNteUNpL1hVRWxOUWExdXk3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJT3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eis2RWQxeVBmT012RDlRWHI4aDk4OWJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
      price: "$1,899.00",
      name: "APPLE WATCH HERMÈS SERIES 10",
      description: "42mm Silver Titanium Case with Satiné Grand H",
    },
    {
      id: 2,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
      price: "$1,949.00",
      name: "APPLE WATCH HERMÈS SERIES 10",
      description: "46mm Silver Titanium Case with Satiné Grand H",
    },
  ],
  appleSe10: [
    {
      id: 0,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAXN4ref_VW_34FR+watch-case-40-aluminum-silver-nc-se_VW_34FR+watch-face-40-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Z1NzcFhRam81V0VMcmMwOGhScW9LMCtGZUJWLzNFUFVydllxZFp0d1M4NUljRjVjb3RBRUI2RzdxR2VyMW04MnF5VHRBbElsRHpXaE1mSkhoUzFQcHpxSVg5ZmpBaEFSRUFDbEpLVHdLeHNodXVnWEhQK2VZdnJTTTh3eHY0MDJvemkzVHVVZW45c3dWV3V5ZDE2K2NyTDlwY1pMcUNidDRWUHlHRkJBWFpTL01STFFDc1pIWERaYitDMFRMRXNQSkhOU1VLWUdYSExoSHh0bUdLbmpydw",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-40-aluminum-silver-nc-se_VW_PF+watch-face-40-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=eVFRRnRpUnQzTmdRLzVkSSt1UkVxSy9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmVvUVRHZHpYaDdQMVkrSFlSOTRCclVTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MAXN4ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Q0hsS2d3VGFWaXpWMDVISG1UQmdqdGJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkycjJoS0JiNWNyT2N2TkVUR0ljeVk4eTdKcEYzc0llTDBCVVR1QkJqb1diZXc",
      price: "From $249",
      name: "APPLE WATCH SE",
      description: "40mm Silver Aluminum Case with Star Fruit Solo Loop",
    },
    {
      id: 1,
      sideViewImg:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      price: "From $279",
      name: "APPLE WATCH SE",
      description: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
    },
  ],
};

const activeCasesList = {
  appleSeries10: [
    {
      id: 0,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-silver-nc-s10_VW_34FR+watch-face-46-aluminum-silver-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWXFFVjdLK0FIVkcybkFCSU5TazZqeGo4SU1nSmEzL05yUUJLZXdmaWhScVNndmdtajNLc0tYa29tMjdSbHJFVEp0ZjZkMHZqenFTREwzcHVvQ3ZRL1hBdzhRZzJqU0xkSEpFODEzRDVva3c2SjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjTGR2eVV1dVhZMUJWaDN1R2o1UnI4SDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: 1,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-rosegold-nc-s10_VW_PF+watch-face-46-aluminum-rosegold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3MFhCVTI0TG9VSWowa2ZNaXhKRWFaSm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWVRZ3NtU2dFUnRuSVJhQzVBeFVadWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-rosegold-nc-s10_VW_34FR+watch-face-46-aluminum-rosegold-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWWYyNHkrWFJNZ1BodmdwcWlUcmtNMkhaMkVQZTdleWFvVytrdnNBQmJzc2RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJiLzMwazFsQmpWNUowMkIwc3EzL0xpSkl2OTJEMEdGMUpkR2p1bmRlWnpuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: 2,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-titanium-natural-cell-s10_VW_34FR+watch-face-46-titanium-natural-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWVAyU2JPM1Q0emFpRE50TC95Y1liWWFrQXYxY2pXckE2QVZDWEhUZHpMMm5qblBjd2JiYm5raG5NaEt4aVI1UUlQMlNiTzNUNHphaUROdEwveWNZYllQdExIVVAwV1g4TGVMb1BoVUViaWMzUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: 3,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-gold-cell-s10_VW_PF+watch-face-46-titanium-gold-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqa2NVRDBtRHBIdlNvZFpvSFN3SFNrVXlKN3h2cmJhZy9Wa2xIdm9lcGFpb285ZnlFYUluNlVpdEVDTlo4UFJtQnVWV3Bsak5WR3RZeXgwZTJxZ1FBQWQwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdUYVhFbmVlOVBZQVJ6YVVMREY4VVdDSkxMYjhBbEZsbUNjbmtLUUgvNzJC",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-titanium-gold-cell-s10_VW_34FR+watch-face-46-titanium-gold-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYkdzNmhoZy9wdXZ1eGxsMlpWR095YjZhM1lKSU1XSjRzVll6MyttdlhpVVNndmdtajNLc0tYa29tMjdSbHJFVEpRQ1BINzRIOVNwOEhydmVpRU1xK21INHduY3RlaVl4bnFsS1dyWThFSSt5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6bVVOZy93RFBhVFYxY0d4YWhRZ2lTdw",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
    {
      id: 4,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-slate-cell-s10_VW_PF+watch-face-46-titanium-slate-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqcVNqaHozUE8wNjI5UVd3V1MzZU9ITDk1ZDUyeHhvREd4VE1qbnlsOGRsRkpsRGF2TDgzZHo4RzR2eUh2TDZyckFIRjBBZXk0a1ZITlZxZjFUK21za1dGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-titanium-slate-cell-s10_VW_34FR+watch-face-46-titanium-slate-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnWTc4blplVGNpSEZpNjZUNjVaN2NmQ0hYdElIVEV6MlVLNjZQdWRicTV0RXZmQXlUU2xCQ2pTN3lrcDE0UU1hK0VYZWthQXJCL2NtQ1RrVVMvZXZWQVlBdzhRZzJqU0xkSEpFODEzRDVva3c2SjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjTGR2eVV1dVhZMUJWaDN1R2o1UnI4SDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
    },
  ],
  appleHermes10: [
    {
      id: 0,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
    },
    {
      id: 1,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
    },
    {
      id: 2,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
    },
  ],

  appleSe10: [
    {
      id: 0,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
    },
    {
      id: 1,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-starlight-nc-se_VW_PF+watch-face-44-aluminum-starlight-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvVjhlS0RvbExkSVZPek5xRFljdmd2Q3U5WFZLblQ0SkVHaitZL0Z5WWg5UEdKYzBybzh0cjZNM3RYT2JlTWxscFdBdFlkNzJTZjYrUjBZdGZXNnQ2RWtFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0o1dGtMOHZpK0hVNkRlVmdGZ0tBZ0lDWGlpUXYzUUlIWENBV1U1eFVacWtW",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-starlight-nc-se_VW_34FR+watch-face-44-aluminum-starlight-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnWURIZXhSOVNUU1hpL1hkOUNjbEVLTCsydHFDU0pvT1BSK2dOS3RYTkxwdzlGNnlaeXQ4NGFKQTAzc0NGeHR2aVp0aE9FQnlrZ00zbUdqcHZKNEpaMWJaS1ZRdWNPS3Q1RURqYVgyaEZJZmtYUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFESHozOGxQYkEwQTJRMXBVZU5xSVBtWGNmajUrNlBMeEVhR1ZyVSsrR1I5OA",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
    },
    {
      id: 2,
      case: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-midnight-nc-se_VW_PF+watch-face-44-aluminum-midnight-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvWWsrTkRBdHM1VXFiSG1WMllwV0Q2MGtkc0l0QVowZ2tEYVB3ZUJMUlROdm5zekV1aVFWN094eE1xMGx1STlBbzJnWlhGVVZEMUdYR1hhdnFzTUdCa0FUTXppL2Y2ckhoTlZqTFdMVDU5MUE1Vk01MnRhY2h1cjZsT2FGZkxNWmZ6dmF0TGQ1ZEdZWlhvVHVMMXhNY3gyV3dZOTNVbkVaOC9ZdEZBUFY4UDcv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0dzN2QVRTWW5kR2Jad3ptYU8zZ21EUWZmQXlUU2xCQ2pTN3lrcDE0UU1hK0ZpRFN2VTEyRk9ZNEFubk9kM01kUmIySDNGVkFuTWJDdzY3LzhwNXhBeGd0Ym00TFVJTmE1MTNpZ0hNUnluY3IreVlvSjEvSlA3UkM5bENQK3pUaTJyeFBhYmRmQllya25zMjZzaDY2MEQwTkhvblRYOUlacG9vS0VxMkE4Z3Z5Zw",
      band: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UGhXWnNyeDRvRlZiMTF1d1FwcFZxQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
    },
  ],
};

const activeBandsList = {
  appleSeries10: [
    {
      id: 0,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YkNuZGR3T1BLNVZTL0RIdE1hN3pXRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFEdlR0YU5jZ3Ivdkk5aEFBVG9lZGRtd0wzajlzNVlOMkVIbkVuRzBKMFBOYw",
    },
    {
      id: 1,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YkFzZ2NhdC8rT28wTVJIMG8zVGJhanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WVNjN2d2K0IyRWs5TVRBOEoxa3R5RW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFEdlR0YU5jZ3Ivdkk5aEFBVG9lZGRtd0wzajlzNVlOMkVIbkVuRzBKMFBOYw",
    },
    {
      id: 2,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Zms0YTN2QWltRzdYTFhmdGNUQ3Y3enVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UHZIekNRQkg1TjQ5YUwrNjJiQTBBRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFEdlR0YU5jZ3Ivdkk5aEFBVG9lZGRtd0wzajlzNVlOMkVIbkVuRzBKMFBOYw",
    },
    {
      id: 3,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MWgzUlBDUHFLc09nNXp6YkQ2R2tRNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QVNNWVNleXNlcm1uajVheXV1dFhVcXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFRkl6b3dyTlNiTnR4ZkY4d1VVU0FiaFowWWJrQTRZZGRBeSt2YmhWQ3pjOA",
    },
    {
      id: 4,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aHdtU2pZdHZkZkdRMDR1T1VOK1RNSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NldXK0poYTNoajNWNUZlNHhTSmNqNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFRkl6b3dyTlNiTnR4ZkY4d1VVU0FiaFowWWJrQTRZZGRBeSt2YmhWQ3pjOA",
    },
    {
      id: 5,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bHRhN2Rod0NDaU9ITnVtNkJjSWpkSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZVF0MVBoQTNhT0JsTU9wemdVTERUbGtsUWtsVFJIQnpsQUUwTmlqMmlPcWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NldXK0poYTNoajNWNUZlNHhTSmNqNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFRkl6b3dyTlNiTnR4ZkY4d1VVU0FiaFowWWJrQTRZZGRBeSt2YmhWQ3pjOA",
    },
    {
      id: 6,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dkgxYlhvNDVqa1ZRSGx4QmRzOWRoNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFRkl6b3dyTlNiTnR4ZkY4d1VVU0FiaFowWWJrQTRZZGRBeSt2YmhWQ3pjOA",
    },
    {
      id: 7,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a3p5RDNCTHlpSnh6eE1kSXZuUXJ6NFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cmlSNnRldUpFME9DZVJzdkZ0dHM0NnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 8,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WnQyLzFySlFDbE0zazUzelhSWnYrSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MjM3Y0FkQzdVTElBQmhhY09GcFhncXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 9,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QTFaVlplN1d2dmovWUttemNVR3Y3VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDFsZVFCNzVxV1ZrUEZaNngvTVNzc0k",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MjM3Y0FkQzdVTElBQmhhY09GcFhncXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 10,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL63_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SlQ2VStRTHBMMTFPRU1uTmxoVHpJNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K1hWR2hVQTExWGNIMWp0T0xubW1PS3VKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 11,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MN6L3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=elNlK2NZbXc4Rmtkb0pudWY3ZFBTNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZTlEblVKbEZPd1BUQzZVeitvQWlDU0NTK2lCQXhRdDRQSVI1dHVzMFlaUlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K1hWR2hVQTExWGNIMWp0T0xubW1PS3VKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 12,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTJ3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VHBsUmlDTHRQNFBFUHMxNEhiNm4yNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZTlEblVKbEZPd1BUQzZVeitvQWlDU0NTK2lCQXhRdDRQSVI1dHVzMFlaUlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL63_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDV0YjYrNGdpc0xHLzl2VHlURStLcXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzNEY0hnTGJsWFByZUlJd0I5WUJKVlZuRHg0N1hEQTNiUDFndjFzeUVKK1Vlb1lGanY0L2U4Y3NVbXpKdlc3ZStYSHgzTU9lZFplQm5lbHZsTUtHZkpFMFJLaWZVbTJwRVowbkVENE5BWmcrblpDMzZ4REZOSFNwdGp2ZEpCbWtqbw",
    },
    {
      id: 13,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-loop-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSThZeUJxQ1JPMXJ6T0RlV3RCYzZYYlE3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MN6L3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-pride-sport-loop-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2libGFnSjBRVXRZbmZXWHZQcElsS3VKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzBTTm1aWmVENFBzVFc2UXUrWklmSklBdzhRZzJqU0xkSEpFODEzRDVva3c2SjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjUEFPdkJMd3JIV1l0bVZMb25KVXdJSDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw",
    },
    {
      id: 14,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TWYvajZ0Wi9GK0c4Q3Z5S1J6ejJ2VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-sport-loop-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFendWLy9SWGQxYVp2R2ZoWC90eGZSZ3VZaWxFRVJQMW5pVjZ4bEU3NWRBNllRc0VScEh3U0w4VGlyWWlBTCtHQnMvb0k4K1JJamcyNkFVbXdpUlo3RWRiZnFQQksxY1NLOG1PM0F3YkM0aG5sRWx3QXRlQ0Y1eXNJWlEvdFlQUVo2",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTJ3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-bhm-sport-loop-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dUZSQ2JsMlpFTmlTR1NXaVR4K1g1NnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzJCMlZSbnU0VkJ2QmFDUldzUkt1ZFpINHduY3RlaVl4bnFsS1dyWThFSSt5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6dm12ZDFjS0JGbFNkOUtNdnFRYi81QQ",
    },
    {
      id: 15,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ODl3Z1Q2VWx4QjZLd3Y4U3Brb3Y0VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dDlYMll2ZGpWRjc3M2dITHkxUzdGMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 16,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLT3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S1B4aWIzTGhsMUZJUGxFWUExaHJSenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UzE4U0gvUkVPVWdqOTMwV2xIOHRaMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 17,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bTVPWG9LeURGUk1MeHRrSXdzZHJFenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cGZhQ1oyMC9mZnFPR0VqbzNjdDFja25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 18,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLV3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=N2JMZkZuSVRMU1k5eEtYeUszbHpUenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLT3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NVpsMW1uRysrRURvdGFvdUlCakFKa25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 19,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Uk1aQWFsZ01hbDB5aTlEcmNLMGo4VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 20,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MRTN3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aFNwbVFMUWhCcFErNGF0dTlIQndZVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLV3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MU9NbytJQXdtRzFDWW1lNHcxNkNLa25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 21,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGW3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VkNzcXlqQ3Q4UExLTDdhd3g5OFV2RHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RS9tdlNZM2NaZ0FSNHV6djJaNGYzVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 22,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VUFDM21oL2R3MlYyVUJVcm9xUDdqb1dnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZTlEblVKbEZPd1BUQzZVeitvQWlDU0NTK2lCQXhRdDRQSVI1dHVzMFlaUlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSTZlMkVkeVhaWERSSmpNQ3lHWDV4UmM3bmF2bGtaYVRaSWxvS2tIcm5qYXNEakZQR2VFQTQzTllEaHZybi9xVzhUVDRsdlZiY0I1UkVnSVZKOUNYUnRja3ZvZ1FNVUxlRHlFZWJick5HR1VX",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MRTN3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-pride-sport-band-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MG4rRmdsOTRLNVdESFo3bzJTQVI2MG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVllajEvQUhuMmZaY3lyelJ0WjUxTjNodUhBQTE5WHgzY2UxSWFXWFlLVnZ0bm10TUozNnEra1U5R2hUMWEzNjRRbVJ6RDVCMlh0YU5YaURTM0lwZFNjZXpwZ1dZSE9heDR4N1UxV3JnWUxDWGJHT1RyNkcxbnJrOWFqUldGR3p1VQ",
    },
    {
      id: 23,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-unity-bloom-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFencxZVJMcXUvaStBTTM5VUJXM2JDOTZIOU9hT1lRWUhZWXo4dkN1UUxyOGNUTXppL2Y2ckhoTlZqTFdMVDU5MUE1Vk01MnRhY2h1cjZsT2FGZkxNWmY0YS9LQUhrZzFGK2Q5OG03NnhkTitqVmhZbHpURzh2Z3FZVFExTWFOWWdq",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGW3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-bhm-unity-bloom-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NDNpcmVkaklvVm5VWkNaTHJseGxha25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJqZHJ2YmZCNEFpaXluOVZHYWtDOGJ4RHMzM3h3OWdaZTRHY0M5N2FiUGo5Ym00TFVJTmE1MTNpZ0hNUnluY3IreVlvSjEvSlA3UkM5bENQK3pUaTJybmNlaHhvZDM5SVFUcTM5anlJZW1qV095M3FVNGRMRGhQOVJkY0RxRFRkWQ",
    },
    {
      id: 24,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RW5hV0wrL0xmSE8rMHRSZVArazBMenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-sport-band-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFendWLy9SWGQxYVp2R2ZoWC90eGZSZ3VPNkdESWlaZDczT1JDZ3lNck56akFRc0VScEh3U0w4VGlyWWlBTCtHQnMvb0k4K1JJamcyNkFVbXdpUlo3RWRiZnFQQksxY1NLOG1PM0F3YkM0aG5sRWx3QXRlQ0Y1eXNJWlEvdFlQUVo2",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-bhm-sport-band-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bDBmS0FkcmpnWWZWTWNIMTl3TW9KYXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzBGNEM0QnBPUnBsNEdOaVFjSStXdUJINHduY3RlaVl4bnFsS1dyWThFSSt5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6dm12ZDFjS0JGbFNkOUtNdnFRYi81QQ",
    },
    {
      id: 25,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWT3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZnVhSnVUUlIralFSbjE4REFRWEQ3VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UTNBWitJYlAwbll0aHdOeWNhRWlaMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 26,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=c01QK1lMVFcrR0dVR2ZHaUlCVUxLRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 27,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dlkybTZ4d2drVWNXZnNmdXVuKzNlRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWT3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WTIyRHN1MXlTeGNnY2xuekIxVE0zRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 28,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY223ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a05hRzZlMmEyZ2xiTE1nYnJFd09vVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WDdpVXFsS2JLNEF3KzhoQVozT1g0MG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 29,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY3W3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YlJLSWNNQ29LUm1MSWdjdSt0MHcvVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VndoZVczRENFV1VDUGlTT2sxVXljVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 30,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY4E3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WWFPWVdOaVBWUVlxcC9vczNtNUtrRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY223ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=N1dKbEFHUWVmWXluODh5a1pXUGpoMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 31,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGD3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZmhnZ3I4WEF6MHlienFPSitGVEhLenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY3W3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RWcxSjgxSThDN0NLdlhsYW5Cc2dhRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 32,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMWK3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YXh5RElQd2dkNmtpS0V1WmRGYjBZVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRC9NZXZJNEg2TlhtcnQrZHBEZ3YxRDA",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY4E3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dGRxZVpGOEc3M2VWczVVbkRUeFZOMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFETm9ZckFmUEdaRXpXLytHcUZhVlgwQ2FKV3ZIV3ZHWEd5NEdsT0lPM3VHaw",
    },
    {
      id: 33,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-pride-braided-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemZlOWJEUzUwWGNwSWt1b1FQWmlDSTM1UFlZUStWUWF2NEJDVVBkbXRzaVdGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE55YUFMQTZVbytVRmkwSlErUklLZ1RKVFZPdWVnV1lBMmx4QVp6WUQwOElS",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGD3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-pride-braided-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eEM3cmp1N1RvOTcwb0RwdWVoYm1IVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWFhaENvV0hFVWJTTUVnV0xpb2RRWlFBdzhRZzJqU0xkSEpFODEzRDVva3c2SjFVQUNMMTRDMmpEQTU4alJwaXczZ2JLbkkyNlZLM01IdTF4dXlZT3RjUEFPdkJMd3JIV1l0bVZMb25KVXdJSDVxTVc3OWJGZitiOGMyeGZ3ZGVHYw",
    },
    {
      id: 35,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8E3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OVp5Vlk0aWlkTlE0N2J3VWJDQ01hVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-bhm-braided-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFemw2bkdDYmdTd0kwajRLdU5rSnpncjJqcURmR3ZpV3RGQU5NMUF2SXJXVVowSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdjUFVPeGpUQWF1eW1xdUFGT1N3N01GQVNuTm9jeXVUMkJsZDdCMlllR3Vt",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMWK3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-bhm-braided-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=THk5WDFaSENRanRoalAxUmJyNkR2RW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJ6ak9KWmZnMTFhSXV2VDhqQTlreDRINHduY3RlaVl4bnFsS1dyWThFSSt5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6dm12ZDFjS0JGbFNkOUtNdnFRYi81QQ",
    },
    {
      id: 36,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WnJuZm5OaVpQcG01bXU3Q3dIelF1anVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aENQV3FvenlWcmhQL3JWK2JYWnZqRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 37,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY9N3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZnlqdHRiU2VyRzNkN0xzUWEvcFV6VHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8E3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WUZrVkhaYVpBcTBuKzVwY0MybXBrVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 38,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NXNWTXJEcUF2Z3JXSlZGSUpDVFZkRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 39,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJE3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TU42TmZSd3JScmtTU2dIV0NlelliSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 40,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU13_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eDlCSGVCUHVEVDZod0wyT3RnOEo0WVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY9N3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dWxQQWJOMmViQVhyOHNHazBSK3pXMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA",
    },
    {
      id: 41,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU33_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eU5wUVZDZkdVekZBRzNNRFFsbXlKNFdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-black-blue-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmxiZHAzYTNVY0EzemZ0T2VDejBzYXl3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsyYkkzNTk2U2hTV0UwWnlJd09ZNVRIbFhueVhTWURCK3B0cHZUbzBsNktwUQ",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-black-blue-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cnpmM01vSEpZTG5sZ1VPTGtpWHpRYXVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzA3Vk5Ia2FuS0hVcmVUUzl4cTRnbmhGRitORWk1NmZab29SdmdUeUpUZUdwdjE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoZ0VnVlUyUFVrR2hJc1BEUjA1NFVvZw",
    },
    {
      id: 42,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU43_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UVAzSDd2Vy92NTlhSFhUL0l3SG9HSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-starlight-pink-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdGNjMzeEdDQzFiU2d5M3B5ZmRJdXgxSmc5U1d3dDFqRWh1c1BzajduMUFpZzJBMXVabGpLV1BYM240VHlBS04rVlRPZHJXbklicStwVG1oWHl6R1g5bm1aOHBpdWozT2NWNHhneDRFb2llVWVxT1g0Q2FNc0I4OEM3VjExWmRUdw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJE3_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-starlight-pink-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=djFWaXJMYmQxTlpxRDF2U3lIN0NSNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzE5MmU4NXpUZ0g2ZVpWd1g0TG45QlVEeEw2U2NsSWpCNlhCV21UOWdrODNPM1Myampva2pNRUNKdkxjbEZ1VWhLTUovRXY1M2p5MXkwMWJqUytvNm5sMlNpL1FNNjNNaDlVSFMzUCtrQnJLRS9VVnJ1MmFmOC95enpic3hDWld5TQ",
    },
    {
      id: 43,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-gray-blue-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnNpaCtHNU1ad0dUc1RqR3BLRG5BMVFhVGlwMHhiaVd1bG96dkFmL2J3VW8yZWEwd25mcXI2UlQwYUZQVnJmcmhMc3VWT0FYT3FNWDhtMVRPWnUyZlg1QVlmREpqNzhNRit3MEJIUnNmSTNVZm1veGJ2MXNWLzV2eHpiRi9CMTRadw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU13_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-gray-blue-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S3p6SXJhOGk1VEdjRnZsamQ2RXN6NnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzJBcEJML0tya0R0V3dlRVdKc0R4c3JvUjhucjhhMFk2QTY0VlpHMGZRUGJ1QUFXY1hucVdyVzN0eTBWb2xBYnhXN29wSUp3TGFqdTlBc0w3eDBseTIwaitOUVF1QTVBeFFHM3hyZ29TYmFHbGhSUXZ5S2NaRzZSTE5JK1gvNmNWMA",
    },
    {
      id: 44,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLF3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bEx5NDdheGJ6bDUyMXdwd1hZdDg5anVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-green-gray-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnVsV2xvV3R0MTYvQ2d2eDBkQlNuT2V3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsyYkkzNTk2U2hTV0UwWnlJd09ZNVRIbFhueVhTWURCK3B0cHZUbzBsNktwUQ",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU33_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-green-gray-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dy9rNm0xRWZUS1hOOG1vMENoMDFUNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzB6VVRZUGlQWVI1UldLSTdLM29zR0IzNXJFUEQxc0pBOFdvMmQwNXN1ZEdKdjE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoZ0VnVlUyUFVrR2hJc1BEUjA1NFVvZw",
    },
    {
      id: 45,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL63ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VEgwRWpSSVVURnQvNUIzSDVOdlNXanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHdGOE9oQzBjUDdSa3VpdGRMVkJiK0k",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-blue-red-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdhOWtxVUlXY3RLd0FXSU1xSloyZFAvN0s3dGJlOUxKTW12RTVOd21YNW4xdWJndFFnMXJuWGVLQWN4SEtkeXYwdURlRmNOYjBlQlV4ZUxNQUFGYzAwVEUya1dPclNXa3JmTi9aUnptTkk3",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU43_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-blue-red-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dTc5blVUTU9aZzVacEFubmR6Z1VKNnVKZERJSWhWU0lrcE8vZ3ZQem9Jc3VRKzVvdStuNEE3QjhjNnFmSVlaNkZSaUtKbDJJcncvcjdrUWJrK2EvQnRZQ0x6YjhsYlVrMmpvdFN5NHRSMzJMNUxacDlOaGtBQmI1Yi95QzhqUW1KbjMzWFhib044S28xOW5NYlAreHl0MzJYU1JOMms2ekhxVkFOUUlCZ1FheS9hWEdTNmdtN2VGVDhoaFFRRjJVcGhnZCt4cTBncjg1MkRIbDNhUEx5b2ZPRGZWZHBwcXNGOENlSk5BaUY1TQ",
    },
    {
      id: 46,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL43ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NG9sdTlucTFzNDdiOXYrOWNQdTBPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-volt-splash-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZWaDlra2ZCSlFwNld6eWw4NEIrNGJERklFTm1Xa0xoOW40S1BMWi9QMzNkaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljZm9WNHVFRm9Ybld0RnRZSGs0QkFqdi83M2QwSXRvRU5ibi8ralp4VDY3Zw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-volt-splash-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=T01lblRwUWpwMGhRdUNsNHE0VlAya25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVlHTTllT2Z1Nk9NSmdIN3MzTFRoYXBLOWlscVFFQUtzYlRTR2lwZHBVZnR1M1Myampva2pNRUNKdkxjbEZ1VWhLTUovRXY1M2p5MXkwMWJqUytvNm5sMlNpL1FNNjNNaDlVSFMzUCtrQnJLRS9VVnJ1MmFmOC95enpic3hDWld5TQ",
    },
    {
      id: 47,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL83ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VXAvQ1YvL2dLTmZUM2NXRjc4RFhRenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDU3TGNlM3pQQ1JmaWluUk5mamIxbGs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-magic-ember-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNm9zdVcvMGlreTlUeTBES2cyZVgrL1diSHkrVHEzNU5zdmtIL2c5Rk1vV0ZkaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljZm9WNHVFRm9Ybld0RnRZSGs0QkFqdi83M2QwSXRvRU5ibi8ralp4VDY3Zw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLF3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-magic-ember-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Rmc1ZG1sWEFONXlIeUo2YjZIaW1wa25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWFlM3ZqRDhLeUltSDFJTGxGdDhlWFJGVGswdGphc3F4eGVBU243cWRmalMrM1Myampva2pNRUNKdkxjbEZ1VWhLTUovRXY1M2p5MXkwMWJqUytvNm5sMlNpL1FNNjNNaDlVSFMzUCtrQnJLRS9VVnJ1MmFmOC95enpic3hDWld5TQ",
    },
    {
      id: 48,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLD3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ejU3dXd4UnZOeCtSRlFsbFp0RUE4anVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-midnight-sky-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnBLaFR0dU0vdlRMSm1aaCtuTGh6WnBobDZnb3pRcVU1MGdqUWU4TXloUnhRQTc2ZnQ3b09SOE1vSFg4MGhpN0t4YlIwRlhSM2p5aW1wajBxM1pnY1RkRGUrSUlPczJReWg4UEd6VmNpTXVXWEhMNENsc0RkeDZGWlg4QTNOMldVZw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL63ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-midnight-sky-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=UTdyZDRFM1VOWFdZVk5KTVhLeERna25TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWIvZ1FlWHRGTG9BMWVSOWhxMkhDWUpCZVhTdVZMYm51aG9ObXA2ZFFsUXFza29qRXhRWEJSbGYwN1cvK3AycVRxaWRWQUFpOWVBdG93d09mSTBhWXNONEd5cHlOdWxTdHpCN3RjYnNtRHJYQzNiOGxMcmwyTlFWWWQ3aG8rVWEvQithakZ1L1d4WC9tL0hOc1g4SFhobg",
    },
    {
      id: 49,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLA3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OU54bUgybU0vcHdWWFY2Ky9xS1pyenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-pure-platinum-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNnZlT3hHbUl4RE1ld2o4Z3Q0RmFaMDhNaXVLVmk2TnF5bFBHc2tjWEdNemRsOTNtamphYmpsN21SVmtTaTVHUnJ2NkNQUGtTSTROdWdGSnNJa1dleEhYUkVPMzZGR0VROHAxYWVhRVROejFPZDVjcHg4QXRDWWZnZkpFdmdzckkrdw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL43ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-pure-platinum-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZnRhNjEvQ1RYc1BzUVNpOTlQWHZrVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWJwcHlTZ3h6WmNxcWdXbTZPb0RFdCtSOHdZUzgwK0hXN2szNDJveElvckxaMFBFR1ZsSjZxeStXM3Q5SGdkMmZEcUdCWTcrUDN2SExGSnN5YjF1M3ZseDhkekRubldYZ1ozcGI1VENobnlSTTlqSStqNHpnM05FL1lNR29oL015Z1VGTkFiNTh2QytiMEpKMWpVcU5UaA",
    },
    {
      id: 50,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL83ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VXAvQ1YvL2dLTmZUM2NXRjc4RFhRenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDU3TGNlM3pQQ1JmaWluUk5mamIxbGs",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-desert-stone-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmtpMmZpV1BQeXNIbzd0ZEpwRHRkNitLOFkvcUZYb1NXRUU2cFZmOFhBSTJRQTc2ZnQ3b09SOE1vSFg4MGhpN0t4YlIwRlhSM2p5aW1wajBxM1pnY1RkUUc1Q3Y5c1NZdXU0MFlMcWhDTU5mWVZuaURHcWFnWkM5cHlEanV0ZFFZQQ",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL83ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-desert-stone-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Q3g4bnFOdkkxYlkvbmQ5cm9hVVoxRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aWIzM04zWElmSktoNkRWd05QSXNGTEtJZEZXSExwRW9UQkZlOWxWdFBSdjU4a29qRXhRWEJSbGYwN1cvK3AycVRxaWRWQUFpOWVBdG93d09mSTBhWXNONEd5cHlOdWxTdHpCN3RjYnNtRHJYQzNiOGxMcmwyTlFWWWQ3aG8rVWEvQithakZ1L1d4WC9tL0hOc1g4SFhobg",
    },
    {
      id: 51,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLD3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ejU3dXd4UnZOeCtSRlFsbFp0RUE4anVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-cargo-khaki-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNms0QmNsU3Z4NGpJVjBzNk16cy9ZckFxODh3QlY0M1hFQUl5TWFQeldpbU1kaTByQklSb2lnSXBLR0UzOFZCTkV5SThLdGp1UTFzcTVHV2RhenFtcHljZm9WNHVFRm9Ybld0RnRZSGs0QkFqdi83M2QwSXRvRU5ibi8ralp4VDY3Zw",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLD3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-cargo-khaki-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=T2NKVi9NekNKRElGYTZVWkZ6ZmpRVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVlCNzl4Q1FRUkM4N3lEWmYwbWh3amlRNFVPZXo0K24zSmpiRGhpUytoMUplM1Myampva2pNRUNKdkxjbEZ1VWhLTUovRXY1M2p5MXkwMWJqUytvNm5sMlNpL1FNNjNNaDlVSFMzUCtrQnJLRS9VVnJ1MmFmOC95enpic3hDWld5TQ",
    },
    {
      id: 52,
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLA3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OU54bUgybU0vcHdWWFY2Ky9xS1pyenVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-nike-globe-blue-flame-s10_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFelVxMTFsTStaNmZrUFJobUxVbEthNmdvVWxlMXkramRTK1VsMlJWcW9KcDJ3NStnUTNXaCtXZ2hrREVxUThnR2FkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCsxU3BRSXFqcmNUTHFQUXBCOHpYYjRCZTgwWndVamFGd0VueGJESi9oc211UQ",
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLA3ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-nike-globe-blue-flame-s10_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dkJheEZTaEwyS1R2eVdHalFLU3hvVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVlpdUFDcXphZURTSTg1Y05ZNmZReTRWWG05OTlpNUFNaHh2WkV0TFRoTEgwVHVuUHlaS1JDWHVLSWhhdmQxNHBrbUQyUDI5allMOENSc2dOMGdrVXRlS1E2NUdlOUhXTi9WNmNsSHRGblJjNWxEWVA4QXoyazFkWEJzV29VSUlrcw",
    },
  ],
  appleHermes10: [
    {
      id: 0,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-blanc-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bmlDS2tTT2I3YXhiY1p5bVdLVXRVZm9DdHd2YU5FTjZTSXRTTFUzdU1PdUNHN25LcnpMK29yekV1VVdNbVVYRG02cXZmNmNVMWdYa3dYVFN4R1NmYm5qblBjd2JiYm5raG5NaEt4aVI1UUlNNlNmamNYYlk0ZkVxWkdCb3hBb01USHZVNzlpcjF1MTlOMG5yeVZmZ0hnTVZtR2NtSTZUdGlLOXUzbTFsQllkeWlRdGdCb05hSnoxMFhsOGdVMzllQ3UzYVVUUk40bVpaYlRHWCtWUFZWSXduT3J2Y3Bkck1UTVpPcGw1VkhqSQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJW3ref_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0ZweTBGNktQMWxETEhIK281NkRFTmJtNExVSU5hNTEzaWdITVJ5bmNyK3lZb0oxL0pQN1JDOWxDUCt6VGkyclVsUys1cUNXVW8rekllZ1h1ZkpqTmcxKzQ1ZDFZZG41U2pLNXlJa1UvZmM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-blanc-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2k3UWZsRFZUT3RDUXhiYzBQc00wM1ppWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
    },

    {
      id: 1,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJQ3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-circulaire-vert-moyen-hermes10s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TkVuR3NnanJMckd4VjMzRitmNmtPTzVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEwrZFRHbGx2VUlyUXBreWQ2OWdhcy9aLzZVcHFoTUdKblJ0czFkY1V3bHI4MFlLb3N1bmMyaTVhS3FDdUd2NGdIVzV1QzFDRFd1ZGQ0b0J6RWNwM0svc21LQ2RmeVQrMFF2WlFqL3MwNHRxMUpVdnVhZ2xsS1BzeUhvRjdueVl6WU5mdU9YZFdIWitVb3l1Y2lKRlAzMw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJQ3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Q1ZZM09YYmNoWjF6OThqTjc5dU1LNHduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-vert-moyen-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3Y1MU1hV1c5UWl0Q21USjNyMkJxejluL3BTbXFFd1ltZEcyelYxeFRDV3Zyb2FmcTM0VnVWUFlORHRleVk4WmdLSjFVQUNMMTRDMmpEQTU4alJwaXczVGYxQWFpeTNZUjhveGlsZTNCWHdhK0ZabDFMZjFWb3M0TnhqV0piL1Y0QQ",
    },
    {
      id: 2,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJR3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-circulaire-bleu-hermes10s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=N010cFJQY1NUTDFCa3VUSzI0YWdpZTVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVExrWDFMS0tGemRaUk1IVHV0RFdJUUhUSHZVNzlpcjF1MTlOMG5yeVZmZ0hwMml5UG1HWWNibXlnUy9uOG5KVWxKNE9oaEN2enBJbnViZi9ZTzhwNmcyUytHdFJST2dyRk1JRFJVN1NNNG1RYS9MeW9yeEJKK1duM0YzSmdZTzlscw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJR3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZzVyMTdSMkZUdElyZjhzclFkMVlDNHduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-bleu-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3VSZlVzb29YTjFsRXdkTzYwTlloQWNidVdKVnNpVW1PQTJwMk1xeDd0UUg0QUJaeGVlcGF0YmUzTFJXaVVCdkZiYzJLajlNYm1HKzBqaThWMFZzZHlmN2pMM21vbHZNeDF4Z0loVFRNOVltbTJXS3BRMVgvTmt4WStpS0EwUTJUQQ",
    },
    {
      id: 3,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJM3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-circulaire-orange-hermes10s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eVNVU3VLQzhlbkYrVTlkVDRRd2xUZTVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEtqU3c0NkVuc0MrWitidzZLV3BlNDQ3VWpBazFvN0djL0VIQW4vZkk2a05VVHVuUHlaS1JDWHVLSWhhdmQxNHBrbUQyUDI5allMOENSc2dOMGdrVXRlS1E2NUdlOUhXTi9WNmNsSHRGblJjejN1SitMVkM1Ky81NkR2di80WTdESQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJM3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WldLYnVCaWdWb1J5d2RxZUM4US9tSXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-orange-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3FOTERqb1Nld0w1bjV2RG9wYWw3amp0U01DVFdqc1p6OFFjQ2Y5OGpxUTFyMU1nNFFnS2FjcVBaeVZUWkdyVWFIZzZHRUsvT2tpZTV0LzlnN3lucURhYXpYQzV2aEpKd1RTRk52WnIzMlgzbys4eFRPN0VuM1VXTHJnRUZQbWlRdw",
    },
    {
      id: 4,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJN3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-circulaire-orange-hermes10s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S0tleVAxdE9URUY1aDdIK1RnWk5XKzVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEtqU3c0NkVuc0MrWitidzZLV3BlNDQ3VWpBazFvN0djL0VIQW4vZkk2a05VVHVuUHlaS1JDWHVLSWhhdmQxNHBrbUQyUDI5allMOENSc2dOMGdrVXRlS1E2NUdlOUhXTi9WNmNsSHRGblJjejN1SitMVkM1Ky81NkR2di80WTdESQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJN3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NklPSDFzbzg3RnhXeVoxS3Nla2R6WXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-orange-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3FOTERqb1Nld0w1bjV2RG9wYWw3amp0U01DVFdqc1p6OFFjQ2Y5OGpxUTFyMU1nNFFnS2FjcVBaeVZUWkdyVWFIZzZHRUsvT2tpZTV0LzlnN3lucURhYXpYQzV2aEpKd1RTRk52WnIzMlgzbys4eFRPN0VuM1VXTHJnRUZQbWlRdw",
    },
    {
      id: 5,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJL3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-circulaire-beton-hermes10s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aVB3RWxjc09YRjRYY21MUWJrYlBVZTVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEpPQmNOSXl6eUlKazd4Z3NHM2xXNzhrVFc5UW1pSWM1dldKK2VWcVFvUjVWRmFjSVlRQk5zREZFUWJFVDAreG1TeHZmM3NnUVVGMWRWY2RFb2EyOW5FUzBXSGFyZ1V1dnNnU3BOUVRoSDBML2hXWmRTMzlWYUxPRGNZMWlXLzFlQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJL3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bDN0VldKZjBLS1o4MU5iUGFNTVZHWXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-circulaire-beton-hermes10s_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2s0RncwakxQSWdtVHZHQ3diZVZidnljTEhSZkxKUVpKdUw0MjVLa0hrYWRVL1N2RFBhVVJMdUd3MGdWd2Z3djlLb2RJWUR2V252KzJaem1mNHNrVDFtTnFDZzBRVVZlT1E2dFllcm93K3pCWkp4ckNoN0FxaWV5VXlWdzRlSUNOdw",
    },
    {
      id: 6,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK23_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-rouge-pigment-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Vlk3QytvR21zSFQ0SHBsRitTMk51KzVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEpkRTdkVHdHYkhoSGRCZTgvdFpZZFZOYzRHSmtBYmRQcGU5V3dqSlZYOFBWQ2lMYUR1YWxIN1ZveDlWQlUxdGpoU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExodGJoVU5DQ3l1Mk9FNkprTFJZQ0Vnbw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK23_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QnZmR3FEVjNHZGxHMWNxUWNMVmdLb3duOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-rouge-pigment-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U2wwVHQxUEFac2VFZDBGN3orMWxoMVUxemdZbVFCdDArbDcxYkNNbFZmdzlPNTJyNVpHV2syU0phQ3BCNjU0MnJBNHhUeG5oQU9OeldBNGI2NS82bHZFbkI5RlIzajZ3YmVBeDdqWDJwWEdsakNjNnU5eWwyc3hNeGs2bVhsVWVNZw",
    },
    {
      id: 7,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK33_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-navy-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a2FiK0lZQ3RHUStpTWxBTk43SWtmTzVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEs2TTY1Ky9ObjE5cXB6aWdHcWk1bXViVFVoVWc2Z0ZXcUc1UVRQQUZ3MDROYm00TFVJTmE1MTNpZ0hNUnluY3IreVlvSjEvSlA3UkM5bENQK3pUaTJyVWxTKzVxQ1dVbyt6SWVnWHVmSmpOZzErNDVkMVlkbjVTaks1eUlrVS9mYw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK33_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bXZVYWxYRzNoWXRMaWpjNllsRGg3NHduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-navy-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3JvenJuNzgyZlgycW5PS0FhcUxtYTZHTmxpVUhwTjk4aFRKT1E1cUU0SUdvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJyNFZtWFV0L1ZXaXpnM0dOWWx2OVhn",
    },
    {
      id: 8,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJD3_VW_34FR+watch-case-46-titanium-silver-cell-hermes10s_VW_34FR+watch-face-46-radial-beton-hermes10s_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2wzMmM2Q2pDYlhvenhPamx6S1hIKzVxVzV1SWdyWkx1L3pvamdUVHAzVldTd2V0YWlzUWFWa2EzSi9ZNk5ZZFRIdlU3OWlyMXUxOU4wbnJ5VmZnSGlndmdtajNLc0tYa29tMjdSbHJFVEtYblpXT3h5N29xQ0U2VUNYM0dyVjFXUUNlNWJOTUIvL2NlYkdFMlgvMld0bm10TUozNnEra1U5R2hUMWEzNjRRbVJ6RDVCMlh0YU5YaURTM0lwZFNjYllEMk83MkFiRWN2RVhsYVhRMXhZQ1MwTk5hcm9YVTZyNkhyZ1pFekZyRQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXJD3_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=clcwNHBZRFkwdmZJVUhURWhXUGJISXduOFMvbmVQTFhMVFZ1Tkw2anFlWFpLTDlBenJjeUgxUWRMYy82UUdzb3YwNHhaZm1nVTBYVTB1d1VzUXF1eWc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-silver-cell-hermes10s_VW_PF+watch-face-46-radial-beton-hermes10s_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqbG5hMEpjdElDRys4YVlISkd5ZGNjQXZVbHhMQjlTM3ZKa2hEWWUrdm8yaEk0QXkveXl1VUtOWjhTbGJDZW83U3BlZGxZN0hMdWlvSVRwUUpmY2F0WFZpWXlsaThGV0RuR1F3UUJSdnNrNGs2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1VOTdpZmkxUXVmditlZzc3LytHT3d5",
    },
  ],
  appleSe10: [
    {
      id: 0,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VWRiNnlVK2YwckZJRVZmNFc0WGlwRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=T0grdTFCUnRJVEsvWENzTG5QT213aE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 1,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VFI3WHdFZFpRT1NjQWd5QmZRMG9aa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QjJXK1UzSHFiWDJFWjM0UWlLb0ZBQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 2,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MFpJeGlPcFNmNWtlTGlsZUlBaldEVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7L4ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QzUxRTVZWHVaT3lNS0hXT3pDeWNIaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 3,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U3A1K2M0N1Z6enl2WjBxU0FNM0hKVm1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMF3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=b0R5UG9nNmhaY1RQV3h6aGVITmFVTVhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 4,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dXVKMmFGNUhRVnlLL3o0Y1NYZVNuMW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMH3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=N3hwYktscFIreGJ3M204SktDei9wY1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 5,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QURUbE81eDV6K2RVVXd4RHU2MVo5Vm1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXMK3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WjlDL2xaZGUvYnVXY3lsZTNkYkNvY1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 6,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OXhxRml4aW5RLysyT3NDbXROZ0Q2MW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K2h2alJIZUdzaUNubGJzZHpvZUY2TVhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 7,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=M09MRk9sYmVVMnk3VnVYcGV6VFJubG1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL83_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cHptSktPT05LdjlhdzYyMmJ0VG92OFhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 8,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=V2JmZjM0T1FONlFJZnVqMnpHSGJVMW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL53_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=em56UElQL3RMRmxnMVg5a25oK2lKY1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 9,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL33ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QkF3S1BVQk9QZEd6RHBRdGFtK2hnMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL33ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U3hCK1ErTXNaM1c5U2hlbjZpbUFTQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 10,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL63_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YUtSMDRTM1VoTEE2bVdNMmFEVTRNbG1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1Y4a0QxT3ZTNGFlaXlHVE9vYXh4cTNVS0l0b081cVVmdFdqSDFVRlRXMk9GSkxFV0ZRK0NwT00wSXZuK2ZvZ1NrcGZKanU2Z0J0OEtTV29INUgyRXVHQWZPeHkyclpXTjI3MnRESzhSUVJkQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL63_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MndORVJlaUpBdC9nVko5UEpLak5qc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRamlCYU1FQ25jd0htZ3o1bk52OWlHNDViQmozZFNjUm56OWkwVUE5WHcvdjg",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 11,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MN6L3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-pride-sport-loop-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cTlKNGNGNDBxTzVZa0pVcHdjMXdVbG1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdG5sSnZZU2lmbE95a3daQ1lLbC9jOEhta2U4V01jemdHZlNWTHQ0WXM1d1JzVW5HdW16RVB5aFIybEhra1drbk1YZzZHRUsvT2tpZTV0LzlnN3lucURaTDRhMUZFNkNzVXdnTkZUdEl6aVpCUnVyZk1sWDBvaktLV1hxWE1uVGRZQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MN6L3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NXk4V1BPZjJwcEhGdFlxV2k2bXdTc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRait6Ukc5YnBNNitiemRQWDM4SXRXUVd2VjNJcVBHRndXK2JGTSthVzV2OFU",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-pride-sport-loop-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmZuZVBPSlpTTXNid0pRT3QyYkxWZWMzR0dualdTdkxrbmJxZXQwR28vOVhGMDZFQ1NZeDBHSFJLRnFzT2p6bkZJandxMk81RFd5cmtaWjFyT3Fhbko2U3BaeVRTV2pFaVkzc1BmS3BKWXlxSEZGWXN1SmRVN0RBNjVIODVvSDU5",
    },
    {
      id: 12,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTJ3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-bhm-sport-loop-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MXZCdWM0TnFlSkloVnB6d3lFdmhGVm1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdHZ6SjhUVU81S09vaDVLei80ZDNoTmhDVkNOOUFwM1MrdEVlMXFkSXRUcnZUeHdqMmwxcWRvZUk5TXRXSEhndmg3dWlrZ25BdHFPNzBDd3Z2SFNYTGJTUDQxQkM0RGtERkFiZkd1Q2hKdG9hNUd2cTV1ZzZGdy81Y2ZMNjlwWXo4QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTJ3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=a241L3hwbGthdXM3R3pqanRSdUhWc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRait6Ukc5YnBNNitiemRQWDM4SXRXUVd2VjNJcVBHRndXK2JGTSthVzV2OFU",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-bhm-sport-loop-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvckVXWi9ZNDNPVldaT0grM1VBN3hFVCtlRGZhalE2S25URTVyR1p0N2crRHZaNXJUQ2QrcXZwRlBSb1U5V3QrdUV1eTVVNEJjNm94ZnliVk01bTdaOWZsNE9qbXVWS2RXYnplajBIUHY3cGhWK2FqRnUvV3hYL20vSE5zWDhIWGhu",
    },
    {
      id: 13,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=b3FFUmlXT0d2TVlsZkVXMzNpcGZZMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WEduNklCTzdONzkzanVpTi9lTUhFeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 14,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=R0NpbmVKUHpZMFh2YmhrOElrdHBQMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLX3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TE9zaWJqdG85Q3FhblFjMlVvK3hkeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 15,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QVR6TmZRU2x1RjZIVW5wdDlyenB5RW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM63ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MGxpWDJOL2oySmF4UCtRR3dIdG9ReE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 16,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLT3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MWNHbmk5QlVXRUg0MjRISW9PTUxqMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLT3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VllJTWloaUQwSnN1NHNQVEovQ1lseE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 17,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WW9IbVdYalMvd2d2VVBzY1N5SjZGa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ekdyaGVUNURjenVRRlllYk9HSS81eE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 18,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLV3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aFhBWTJ1ckdHdm1GM0VDdHRYTWVxa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLV3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZWlRWXlmeWIyME5MUDhkME1lR0RpUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 19,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=K1E2UkVkY3g5dDdGRTZrL3ZsL2VMMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM83ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MXdPbUsvTnBYb29pelcvNktvZk9UQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 20,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MRTN3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-pride-sport-band-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TW9PR0s4QTNSLzBLUDJ3VzFVc01XRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3NIcEh0SUs3NzJWL09Td1lYaTFqUXV4cVNUNDJadDNVSmRncE9SalAvZ240d244Uy9uZVBMWExUVnVOTDZqcWVYWktMOUF6cmN5SDFRZExjLzZRR3NvekdIMnFKK2RiL3hqSFhVdGVJZk80QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MRTN3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MXZabnVnQUgremJmQ1VTeXhoUndEUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hvYW01YTlLTVhsOXU3c0h6L2ZtWEE",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-pride-sport-band-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmZuZVBPSlpTTXNid0pRT3QyYkxWZVdwWnlXU0VsaTd5ei9ZMmJqeE82dy9GMDZFQ1NZeDBHSFJLRnFzT2p6bkZJandxMk81RFd5cmtaWjFyT3Fhbko2U3BaeVRTV2pFaVkzc1BmS3BKWXlxSEZGWXN1SmRVN0RBNjVIODVvSDU5",
    },
    {
      id: 21,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGW3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-bhm-unity-bloom-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=b3JHTUxOdnlRc1pLY3cvTTNkOUdtRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3ZuOEdDZ2VVb3p2clVlR0VHZEppazNqN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6cXBTazAyM3VwWWU3WDhjMW5ZQ2RmZw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGW3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MEI3d1p1SllPcWlOa0RvcTBacmIraE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hvYW01YTlLTVhsOXU3c0h6L2ZtWEE",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-bhm-unity-bloom-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvclJKcENqdVZSMStxd1BCMDRHODY0bXVkYWwvZ1pFK3hCN1Vib2xYWi9rMlYwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlQ0xsdytHYXdYUFZtMGQwbmhhbkt6KzZlY25pOXNVeFVZNlRLd0xnMXpI",
    },
    {
      id: 22,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-bhm-sport-band-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=WmRjMzh1TjUvSEZRRlgyQ1lGLzVyMW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdHZ6SjhUVU81S09vaDVLei80ZDNoTmo2VTRaR3h1U054M3RVcEJTUjUrWmVUeHdqMmwxcWRvZUk5TXRXSEhndmg3dWlrZ25BdHFPNzBDd3Z2SFNYTGJTUDQxQkM0RGtERkFiZkd1Q2hKdG9hNUd2cTV1ZzZGdy81Y2ZMNjlwWXo4QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ4W3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cGxGMTNDbGxORUNkcTZBQ3U5WmxPc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRait6Ukc5YnBNNitiemRQWDM4SXRXUVd2VjNJcVBHRndXK2JGTSthVzV2OFU",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-bhm-sport-band-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvckVXWi9ZNDNPVldaT0grM1VBN3hFVHpqMVFpOGg4WjJjb1VuZUJIOWw3aWJaNXJUQ2QrcXZwRlBSb1U5V3QrdUV1eTVVNEJjNm94ZnliVk01bTdaOWZsNE9qbXVWS2RXYnplajBIUHY3cGhWK2FqRnUvV3hYL20vSE5zWDhIWGhu",
    },
    {
      id: 23,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eDh1bTVFa1VsMlBzUVlEUytmRzhWRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=U0RPY1hlbitZaGRwWXJOc2ZjWFNWaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 24,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=d2JIMkx4bmZBaGlSYWtVM3E5eGxpMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6dFY4bFo0YzlMZnVCZWJiWlhNeWZvQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWW3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SC9rN1NlbGlmTldKd20zK0VJbDhGUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 25,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWT3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NU1YaXdMbHd3aHNPVFpoT3M0Tm15MG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWT3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TTRIa3RIVXZLdk0vK0dBTDd0a1VweE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 26,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=M3ZnVkw5cUxyT0lnMFJmRERKd0JBVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MkNobEd2dlFtakpkOW9VSlZqQXhpUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 27,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Z2g5bHdLM3RGQTIrUm4rVjk0cFNCVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY2P3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QlBzRnVncENWYVNsT1ZSRGRiQW9XQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 28,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY223ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RWQzRHJzcFR3a1NXN0lvRUtISktPRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY223ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RTFjTFZBUGVnMUhIaEtlRCtNVGhOQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 29,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY3W3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aTNiRk1HNDE1b1B1TjdGdlZvOG5wa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY3W3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZUdYYnJyTHo0SUFaWG9pbCtzRzA0aE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 30,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY4E3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=M0JIWFNPbUZ4Y1hUd01hWUcrRjYzVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY4E3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=bUpLYUNtek5KSVFtUnZ3YWVURnVMUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 31,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGD3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-pride-braided-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=L2hoYldsMXdOVG9Wb3VqbHhWL1QzRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3RtRnVXamNGMVNSYzkrei9tdU9BcE1zVW5HdW16RVB5aFIybEhra1drbk1YZzZHRUsvT2tpZTV0LzlnN3lucURaTDRhMUZFNkNzVXdnTkZUdEl6aVpCUnVyZk1sWDBvaktLV1hxWE1uVGRZQQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGD3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=aXo1eWpmcXlIRVFZZFpUbkFZbUpheE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hvYW01YTlLTVhsOXU3c0h6L2ZtWEE",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-pride-braided-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvckFlY0tZR2RsaFFWN2E5dGZza1VNQkloQU1tdXpyU08veGU4UlpZaTNVaDNXNXVDMUNEV3VkZDRvQnpFY3AzSy9TNE40VncxdlI0RlRGNHN3QUFWelRkWHZhVEVOd3RKWmhYbTl6VEdNNEtj",
    },
    {
      id: 32,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMWK3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-bhm-braided-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YXNMMVJEeHU5c0QyS2RVZTVjcXFqRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3cUNSNjhwWGNFeDB4VWVMaFZNQzRUeHdqMmwxcWRvZUk5TXRXSEhndmg3dWlrZ25BdHFPNzBDd3Z2SFNYTGJTUDQxQkM0RGtERkFiZkd1Q2hKdG9hNUd2cTV1ZzZGdy81Y2ZMNjlwWXo4QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMWK3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZXUyR2VvODhYQU9IUVNkTmxVWnQ3eE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hvYW01YTlLTVhsOXU3c0h6L2ZtWEE",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-bhm-braided-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmNtaWpvK3FxdGJKRzlLRndOL3kvQUVMMGFyV09WdzJVelA2a0hpZGF3bDJpZFZBQWk5ZUF0b3d3T2ZJMGFZc04wMzlRR29zdDJFZktNWXBYdHdWOEdnSXkxR0d1K1UwZmFxeS9PN05NU2Zn",
    },
    {
      id: 33,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=blR3UVdwbC9YRnh3Ly9JSHByWEdoVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8E3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S283eVovTWpzVFdBeXp1OG93OUIvUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 34,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8E3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZkZsaFBaT1hVZk84K1VSVEFhRVk1VW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=L2FEU2tKYVMvTTIzZUY0dG53UE5MUk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 35,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY8U3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=T3l5WDc2WUlRUkExb0pZa01KRGNFVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Vk1QRkdURElJaGdwbTgrK0lwZFE3eE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 36,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=THpIeG9DSnBMaFhZeTJvQU81b3BKVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY9N3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RGh0TFk0a0lhZTlnV1NyWnNwemhMeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbjBFZlhneENEQlVBandDTUcrMEczdWFTNlNtaUZqYVNFREF3T1B6WFZhdmc",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 37,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY9N3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TmRNMTZQdVRvSThzTm96dkJGTzhrVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M3WkIzU21ldmpoTXdTbEpnc2NxcE9qN0lwUml3TG5ZUHdkOTA0c0pCQVd5WVBZL2IyTmd2d0pHeUEzU0NSUzE0cERya1o3MGRZMzlYcHlVZTBXZEZ6WjJ0MitZTElFemUzT3NIaVpLcnc2QQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUdJUy9hYXc4b0lsVjUyQXBUMS9lc1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanBYR1BZTFBUSHBFU3JWT2VYU0dVa3BnYk0yKytsZk9sZ0RzTGJyNFRMWUU",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdMdnI3aDBmUzA0aUdsZTdRd2Z3ZjBTNHA3NTRzVmMwZFkvZGFOUmVDMDEwSlB5Y0tYeFR4NmNmOHFJRDcxcndnMGFEVEZmOEhmU2pqOEg4YzFCZjdlMmVHalZBNGhjUjR6TFZCZTVkSVJOMlF0K3NReFRSMHFiWTczU1FacEk2",
    },
    {
      id: 38,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-black-blue-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S2V3aEpYNFZOQzRzOXJGY3pSdU51Vm1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdGxyWjZXYmM1Y1AyUExEYjFqOE9xZFdVdGEvRkk5ZHVKbFJFNzJkYzJlNUdYVFRqb3pOcDVRZVBtV3l4SDQ2SlpKZmQ1bzQybTQ1ZTVrVlpFb3VSa2E2cDhxLzhJYUVkVVByQThZSEV6aU9mTjR0Mk1vYzhCYkpIdjVHK0VERndjczJrZXB3NWdQeExvTG9YcDVwRUVuRQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJE3_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=c1VOMGtYV1daSFhFbDZoVHdXQzU2Y1hUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanRvWlZySlFSeURuSDZ3UVNsdHhCbzlCdndvb2RVWHJtb3FCTnFveWR2NFE",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-black-blue-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQncrYlp6TG9NZzV0dSs3b2tFSjBJT2V1aHArcmZoVzVVOWcwTzE3Smp4bUFvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJvd2Uwb3IwclVEMHFPSTFOY2VmZWdY",
    },
    {
      id: 39,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJE3_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-starlight-pink-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VEltLzNSOXcycFIzWG5nb3ZkUEFiRm1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdGxyWjZXYmM1Y1AyUExEYjFqOE9xZFU5anIwbUxFbTBNOHpvVkNOaU9NYlNnblczOE1PaExWY2VkU0ppVGxyQ3BwdjE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoaEVOOHlRME8vVGdLSkdrZkZycDYvbw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU13_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dFcva2FNM216OFBmeXZTZXh5cmM5TVhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanRvWlZySlFSeURuSDZ3UVNsdHhCb3p3VGhWQ0VPYUtpc3lMUXlqY0NrVXM",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-starlight-pink-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQi9QZEowMWt3NDh5citWQU1rY2liNFEvdDNhT0N0Ulp4dE85WjJHdDlJTXZkQ1Q4bkNsOFU4ZW5IL0tpQSs5YThJTkdnMHhYL0IzMG80L0IvSE5RWCszWFNNQXZLVWF2MldoVitGc3FYUzVEZGtMZnJFTVUwZEttMk85MGtHYVNPZw",
    },
    {
      id: 40,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU13_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-gray-blue-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=YXM0a3FWT2tGaVk1U3plaDA2QjR2MW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdGxyWjZXYmM1Y1AyUExEYjFqOE9xZFVRWVAxd1lVQzFEWk55MkVWZCtuY2EwcXBmd0d0K0ZCQU5uNkhsUEFJWitVQU8rbjdlNkRrZkRLQjEvTklZdXl0eWlRdGdCb05hSnoxMFhsOGdVMzllVXY0S2pPbFpTSjFqdVRvMm9ucmxhSFBWSWZ2ZytSeDlaZUhzQ0s1L1c2WQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU33_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZWkzbGhBRHVMbWZUcGw2V2tHVUNpOFhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanRvWlZySlFSeURuSDZ3UVNsdHhCb3lubUJ0WkNKRXNPdkxyb3lpazJUN0U",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-gray-blue-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjJHZmthMkN2eWNnNDhuOFE2Y2s5SWgvcGJZWldlaEpVS243YVFmT2N3eWdqQ2Z4TCtkNDh0Y3ROVzQwdnFPcDVaOE53RUhhVnVmTGttQkV5a1JuOXpaeE1MR0xGOVBVdExqV2N2c0hDZzdr",
    },
    {
      id: 40,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU33_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-green-gray-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=TU1rZmZTRVN5UGM1Z0lZR002VU83MW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdGxyWjZXYmM1Y1AyUExEYjFqOE9xZFdHV21WRjJTdGw5UEM0OUk0WVg0WFh0YTZQK3VGWmRhdWFtWTZxYmc5Vk1aZmQ1bzQybTQ1ZTVrVlpFb3VSa2E2cDhxLzhJYUVkVVByQThZSEV6aU9mTjR0Mk1vYzhCYkpIdjVHK0VERndjczJrZXB3NWdQeExvTG9YcDVwRUVuRQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU43_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=QnVHazRmdFovOVdVbXRlQ0FYcmtvTVhUb1FKSmpIUVlkRW9XcXc2UE9jVkxLSnhjOWtlY0JxK2JzNm13bnRRanBEYWpSL2E3b2pjNDNsS3NDOVp1NFg0MmZBODhCbDd2Vnl6SHBLQ1ZxRU0",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-green-gray-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQnpXWnBCcWg5TVBTWXp0SWx0cXc5Tit1aHArcmZoVzVVOWcwTzE3Smp4bUFvblZRQUl2WGdMYU1NRG55TkdtTERkTi9VQnFMTGRoSHlqR0tWN2NGZkJvc3FHODB0RGEyUEN0eXhIdThtRVl3",
    },
    {
      id: 41,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU43_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-blue-red-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dmRVVUxUdDl0NWJKai9IUWlCU2k3MW1oTnRqeFlSbmp1WUxONUpWcUIyOXRmNmQwdmp6cVNETDNwdW9DdlEvWGRCU0luK254NGZZeFNSZCtCaXAxdGxyWjZXYmM1Y1AyUExEYjFqOE9xZFVyLzhrdnJIVWJUVTIzTjdVZDFrdDBWNy9PUUFFbEx4QlJhUTNrRkd4c2JIWXRLd1NFYUlvQ0tTaGhOL0ZRVFJOTEtKeGM5a2VjQnErYnM2bXdudFFqY0xMQmZWSURCSlE5OGRzQU91Z0lWejZKZHBmUFYyK2tQRkgyUHMvMW9NRQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=anRQK2VSRkNleGR0eEc1QVhYUjdEeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-blue-red-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQnhnaHhPQ2syc2k2a0RhOFNqWGp5MGFFYVVBMk5lVDQ5Y05uK2NnY0JuZW1KZzlqOXZZMkMvQWtiSURkSUpGTFhzZXAvamFPcVF2ZktTZmxsbU1QQjVPaHE4Ujh3cmJBc0hYalhKb1hMeXVU",
    },
    {
      id: 42,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-volt-splash-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2k1YTdnalM4UzlSUjN5c0U0cmlXa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3M5UUpKODhFMmtZaHVqSDRnZUdlaFdGY21STzgwZnJhWFRwelhFSS85TnU1djE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoaEVOOHlRME8vVGdLSkdrZkZycDYvbw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLF3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SlJ5SnB1K3BZTWlvWkJ3SG1PYzFaQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-volt-splash-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjNOOGcyQnpocFRoM2p6cHNyNUYrRU9Ra3NWMDZBdDFPaFZoUUJhbERwTFQ2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1XcDA1RTRVaDRJaVdkWkNnblNBQzBB",
    },
    {
      id: 43,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLF3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-magic-ember-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=OVpZeHR3b0FiVS9UNDlYUTdjM3lSa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3VzNHVieFY0MjV3T1ZLNUJoMVhRV0pNWUREek5MKzNjVU9WcFFQempXdUJKdjE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoaEVOOHlRME8vVGdLSkdrZkZycDYvbw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL63ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MWhCMUg1b0trMTZQcldnL2pHNjNnQk16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-magic-ember-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjFjKzB3aFFSeDRGQ2FLOUJxdzgrbHFRa3NWMDZBdDFPaFZoUUJhbERwTFQ2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1XcDA1RTRVaDRJaVdkWkNnblNBQzBB",
    },
    {
      id: 44,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL63ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-midnight-sky-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=R282eFlVMzJUMnQ0eFltS2tNRkx4MG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3RQaE1rWFhUWVVnYlQvMmpqamNjTDdab0ZLZm5nc3BrVC9FaFNybEZDeE01Mml5UG1HWWNibXlnUy9uOG5KVWxKNE9oaEN2enBJbnViZi9ZTzhwNmcyUytHdFJST2dyRk1JRFJVN1NNNG1RY09RcjNIcXJSWmNnN2dRcXZsUDJaMA",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL43ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=VFFGaEsrM0ptOTUyWnYrMmUybGhZaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-midnight-sky-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQnphVzF2KysvQ0tJNVM4ZGdKRGc1SVdCS3FOVzlhVXVxUXR0SzlJYmtxTkYxdWJndFFnMXJuWGVLQWN4SEtkeXYwdURlRmNOYjBlQlV4ZUxNQUFGYzAycmZzTzh6MFZKaU43L0ZzNUtmRTF0",
    },
    {
      id: 45,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL43ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-pure-platinum-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=d0ZzTWlvQnY0WmZMVjVNYVB6T3hQa25TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3ZIekVJbVpIRzRtcnVjM21CeGl1REdGZG5CUURuQ3lQWEpBaW1XRVR5RjYxRmFjSVlRQk5zREZFUWJFVDAreG1TeHZmM3NnUVVGMWRWY2RFb2EyOW5FUzBXSGFyZ1V1dnNnU3BOUVRoSDBMNTNPTmpBanhkZDJ1a25pRTU5alk4SQ",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL83ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=eUMzTXY4eENQem1CSmx4OWtDb2ZaeE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-pure-platinum-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjkzUjRGZG9qRmdJMjhsRGZUdUVIbkRpT3FFR3dMMm1IT2VvbmdBYkpXaVUyZWEwd25mcXI2UlQwYUZQVnJmcmhMc3VWT0FYT3FNWDhtMVRPWnUyZlg3ekYwcXBTVWtqbHhRWFA2dlhESnM1Zm1veGJ2MXNWLzV2eHpiRi9CMTRadw",
    },
    {
      id: 46,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYL83ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-desert-stone-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=RUtGWlRISEw3K09zR3NRaFFNRnJvMG5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3U3a2ZKMGkwWXpJZ2VGR3dCRFd4MWQxMjJKaGJaakdRQjU1Z2hFRGQ2OHpaMml5UG1HWWNibXlnUy9uOG5KVWxKNE9oaEN2enBJbnViZi9ZTzhwNmcyUytHdFJST2dyRk1JRFJVN1NNNG1RY09RcjNIcXJSWmNnN2dRcXZsUDJaMA",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLD3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=MXRkUmlPeTArZmpKY215K1V3c0lVaE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-desert-stone-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjBJaWhZMWpvSUlXVitBcWUrcFJQbW1CS3FOVzlhVXVxUXR0SzlJYmtxTkYxdWJndFFnMXJuWGVLQWN4SEtkeXYwdURlRmNOYjBlQlV4ZUxNQUFGYzAycmZzTzh6MFZKaU43L0ZzNUtmRTF0",
    },
    {
      id: 47,
      sideView:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLD3ref_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-nike-globe-cargo-khaki-se_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=NW15ajhxSDFZYVVFdGw0bDBkcUdHVW5TeWJ6QW43NUFnQ2V4cmRFc1VnYlpwRStmNjc0ZGQrRnVvRXdNVDVkdkNHaGtuSWl4aTZFM0NLb3RxY0c2M0xnSm00SlA1UnJIa0N2UDBDVFUwY3NtMmxVaDJPNjZzcnFHNXhrTjhVQ1dMdHh1N2xsdzg2dkVlRW9ybXVDWnhadjE0SWdabUk5TTAycXhmS2Q1VWRkU1N4RmhVUGdxVGpOQ0w1L242SUVwS1h5WTd1b0FiZkNrbHFCK1I5aExoaEVOOHlRME8vVGdLSkdrZkZycDYvbw",
      frontViewBand:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYLA3ref_SR_SE_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cXFudzJTOE9zcWpQUWdMTjcyeWhteE16T0w5L3FzZUUxV010WXRQbjNVQ2FiQ3NiYUliY2ExYlF2U1QxMjNGbmVPaE1nQnNVbkZUZURsYkhjWmRyU2hjV2tVT0x6NENsUjNoUDV0MVpZdlk",
      frontViewCase:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-nike-globe-cargo-khaki-se_VW_PF_WF_SI?wid=1000&hei=1000&fmt=png-alpha&.v=MW9hSUtzSG1YYXBKWExmL0w0ZkxvYS9MMjFrdVpVbER4UTlYL0F6UUxMUDQyakxkbEtxSHpyRGR1NnBLVWEvcmdqRmRLTnFBYW9rdEFnVUdrZnpsQjB3S2FIc2tZR0g3eUtMKzc2MFdmN0NRa3NWMDZBdDFPaFZoUUJhbERwTFQ2aGdXTy9qOTd4eXhTYk1tOWJ0NzVac3NFR2g5clp3N1hYNWtlaU9tcU1XcDA1RTRVaDRJaVdkWkNnblNBQzBB",
    },
  ],
};

class WatchDetailsDisplayer extends Component {
  state = {
    isTrue: true,
    activeWatchType: watchDetails[0],
    activeSizeDetails: activeSizesList["appleSeries10"],
    activeCaseDetails: activeCasesList["appleSeries10"],
    activeBandDetails: activeBandsList["appleSeries10"],
    showRenderVies: true,
    showSizesSlider: false,
    showCasesSlider: false,
    showBandsSlider: false,
  };

  toggleShowBandsSlider = () => {
    this.setState((prevState) => ({
      showBandsSlider: !prevState.showBandsSlider,
      showSizesSlider: false,
      showCasesSlider: false,
    }));
  };

  toggleShowCaseSlider = () => {
    this.setState((prevState) => ({
      showCasesSlider: !prevState.showCasesSlider,
      showSizesSlider: false,
      showBandsSlider: false,
    }));
  };

  toggleShowSizesSlider = () => {
    this.setState((prevState) => ({
      showSizesSlider: !prevState.showSizesSlider,
      showCasesSlider: false,
      showBandsSlider: false,
    }));
  };

  toggleActiveWatchDetails = (id) => {
    this.setState({ activeWatchType: watchDetails[id] });
  };

  toggleActiveSizeDetails = (type) => {
    this.setState({ activeSizeDetails: activeSizesList[type] });
  };

  toggleActiveCaseDetails = (type) => {
    this.setState({ activeCaseDetails: activeCasesList[type] });
  };

  toggleActiveBandDetails = (type) => {
    this.setState({ activeBandDetails: activeBandsList[type] });
  };

  toggleView = () => {
    this.setState((prevState) => ({ isTrue: !prevState.isTrue }));
  };

  renderFrontView = (frontViewBand, frontViewCase) => (
    <div
      style={{
        backgroundImage: `url(${frontViewBand})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={frontViewCase} alt="watch" className="watch-display-img" />
    </div>
  );

  renderSideView = (sideView) => (
    <>
      <img src={sideView} alt="avatar" className="watch-display-img" />
    </>
  );

  renderViews = () => {
    const { isTrue, activeWatchType } = this.state;
    const { frontViewBand, frontViewCase, sideView } = activeWatchType;

    if (isTrue === true) {
      return this.renderFrontView(frontViewBand, frontViewCase);
    } else {
      return this.renderSideView(sideView);
    }
  };

  render() {
    const {
      isTrue,
      activeWatchType,
      showSizesSlider,
      showCasesSlider,
      showBandsSlider,
      activeSizeDetails,
      activeCaseDetails,
      activeBandDetails,
    } = this.state;
    const displayInitialView =
      showSizesSlider === false &&
      showCasesSlider === false &&
      showBandsSlider === false;
    console.log(displayInitialView);
    const { name, description, price } = activeWatchType;
    const viewName = isTrue ? "Side view" : "Front view";
    return (
      <div>
        <Header
          toggleActiveWatchDetails={this.toggleActiveWatchDetails}
          toggleActiveSizeDetails={this.toggleActiveSizeDetails}
          toggleActiveCaseDetails={this.toggleActiveCaseDetails}
          toggleActiveBandDetails={this.toggleActiveBandDetails}
        />
        <div className="watch-display-container">
          {displayInitialView && this.renderViews()}
          {showSizesSlider && (
            <WatchSizesSlider
              isTrue={isTrue}
              activeSizeDetails={activeSizeDetails}
            />
          )}
          {showCasesSlider && (
            <WatchCaseSlider
              isTrue={isTrue}
              activeCaseDetails={activeCaseDetails}
            />
          )}
          {showBandsSlider && (
            <WatchBandSlider
              isTrue={isTrue}
              activeBandDetails={activeBandDetails}
            />
          )}
          <div className="view-btn-container">
            <button className="view-btn" onClick={this.toggleView}>
              {viewName}
            </button>
          </div>
          <div className="watch-display-description-container">
            <p className="series-description">{name}</p>
            <p className="watch-name">{description}</p>
            <p className="price">{price}</p>
          </div>
          <div className="selecter-container">
            <WatchSize toggleShowSizesSlider={this.toggleShowSizesSlider} />
            <WatchCase toggleShowCaseSlider={this.toggleShowCaseSlider} />
            <WatchBand toggleShowBandsSlider={this.toggleShowBandsSlider} />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchDetailsDisplayer;
